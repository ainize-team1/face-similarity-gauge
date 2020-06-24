import React from 'react';
import styled from 'styled-components';
import Uploader from '../ui/Uploader';
import GaugeChart from 'react-gauge-chart';
import * as faceApi from 'face-api.js';
import Spinner from './../ui/Spinner';
import Footer from './../ui/Footer';
import { Status, StatusMsg } from './../../constant';
import delay from 'await-delay';

const faceApiUrl = 'https://justadudewhohacks.github.io/face-api.js/docs/index.html';

const Wrapper = styled.div`
    background: #FFFFFF;
    
    @media (min-width: 1000px) {
        width: 360px;
    }
    
    @media (max-width: 1000px) {
        width: 100vw;
    }
`;

const UploaderWrapper = styled.div`
    display: flex;
    width: 100%;
    background: #FFFFFF;
`;

const GaugeWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 40px;
`;

const HelloText = styled.div`
    margin-top: 53px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    letter-spacing: 0.15px;
`;

const GaugeButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GaugeButton = styled.button`
    margin-top: 32px;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    text-align: center;
    color: #FFFFFF;
    width: 339px;
    height: 55px;
    border: 0;
    background: #9B51E0;
    border-radius: 10px;
`;

const MoreApisLinkWrapper = styled.div`
    outline: none;
    outline-offset: none;
    margin-top: 28px;
    text-align: center;
    letter-spacing: 0.15px;
`;

const MoreAPIsLink = styled.a`
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #9B51E0;
    line-height: 21px;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.15px;
`;

class AppPage extends React.Component {
    constructor() {
        super();

        this.state = {
            descriptors: [null, null],
            status: Status.NONE,
            similarity: 0,
        };
    }

    componentDidMount() {
        this.loadModel().catch(console.error);
    }

    loadModel = async () => {
        this.setState({ status: Status.LOADING_MODEL });
        await faceApi.loadFaceRecognitionModel('/models');
        await faceApi.loadSsdMobilenetv1Model('/models');
        await faceApi.loadFaceLandmarkModel('/models');
        this.setState({ status: Status.NONE });
    };

    onClickGauge = async () => {
        if (!this.state.descriptors[0] || !this.state.descriptors[1]) {
            alert('Please upload each of two face images!');
            return;
        }
        this.setState({ status: Status.GAUGING });
        console.log(`a:{${this.state.descriptors[0]}}`);
        console.log(`v:{${this.state.descriptors[1]}}`);
        const distance = faceApi.euclideanDistance(this.state.descriptors[0], this.state.descriptors[1]);
        const similarity = 1 - distance;
        await delay(2000);
        this.setState({ status: Status.NONE, similarity: similarity });
    };

    updateDescriptor = (descriptor, index) => {
        this.setState({
            descriptors: this.state.descriptors.map(
                (desc, i) => i === index ? descriptor : desc
            )
        });
    };

    updateStatus = (status) => {
        this.setState({ status });
    };

    render() {
        return (
            <Wrapper>
                <UploaderWrapper>
                    <Uploader background='#2D9CDB' emoji='😜‍'
                              index={0}
                              updateStatus={this.updateStatus}
                              updateDescriptor={this.updateDescriptor}/>
                    <Uploader background='#6FCF97' emoji='😉'
                              index={1}
                              updateStatus={this.updateStatus}
                              updateDescriptor={this.updateDescriptor}/>
                </UploaderWrapper>

                <HelloText>
                    {'Face similarity gauge'}
                </HelloText>

                <GaugeWrapper>
                    <GaugeChart id="gauge-chart1"
                                percent={this.state.similarity}
                                nrOfLevels={20}
                                textColor={'#9B51E0'}
                                colors={['#AAAAAA', '#9B51E0']}/>
                </GaugeWrapper>
                <GaugeButtonWrapper>
                    <GaugeButton onClick={() => this.onClickGauge()}>
                        Gauge!
                    </GaugeButton>

                </GaugeButtonWrapper>


                <MoreApisLinkWrapper>
                    <MoreAPIsLink target='_blank'
                                  rel='noopener noreferrer'
                                  href={faceApiUrl}>
                        Get more face APIs
                    </MoreAPIsLink>
                </MoreApisLinkWrapper>


                <Footer/>
                {
                    this.state.status !== Status.NONE
                    && <Spinner message={StatusMsg[this.state.status]}/>
                }

            </Wrapper>
        );
    }

}

export default AppPage;
