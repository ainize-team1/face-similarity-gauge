import React from 'react';
import styled from 'styled-components';
import Uploader from '../ui/Uploader';
import GaugeChart from 'react-gauge-chart';
import * as faceApi from 'face-api.js';
import Spinner from './../ui/Spinner';
import Footer from './../ui/Footer';

const faceApiUrl = 'https://justadudewhohacks.github.io/face-api.js/docs/index.html';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background: #666666;
    
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
    flex-direction: row;
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
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.15px;
`;

const GaugeButton = styled.button`
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
    margin-top: 28px;
    margin-left: auto;
    margin-right: auto;
`;

const MoreAPIsLink = styled.a`
    margin-top: 23px;
    font-family: IBM Plex Sans;
    font-style: normal;
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
            imgList: [null, null],
            modelReady: false,
            gauging: false,
            result: null,
        };

        this.loadModel().then(_ => {
            this.setState({ modelReady: true });
        });
    }

    loadModel = async () => {
        await faceApi.loadFaceRecognitionModel('/models');
    };

    onClickGauge = async () => {
        this.setState({ gauging: true });
        const inputs = [undefined, undefined];
        const descriptors = [undefined, undefined];

        for (let i = 0; i < 2; i++) {
            inputs[i] = await faceApi.fetchImage(this.state.imgList[i]);
            descriptors[i] = await faceApi.computeFaceDescriptor(inputs[i]);
        }

        const distance = faceApi.euclideanDistance(descriptors[0],
            descriptors[1]);

        console.log(JSON.stringify(descriptors[0]));
        this.setState({ result: distance });
        this.setState({ gauging: false });
    };

    onChangeImage = (img, index) => {
        this.state.imgList[index] = img;
        this.setState({});
    };

    render() {
        return (
            <Wrapper>
                <UploaderWrapper>
                    <Uploader background='#2D9CDB' emoji='😜‍'
                              imageIndex={0}
                              image={this.state.imgList[0]}
                              onChangeImage={this.onChangeImage}/>
                    <Uploader background='#6FCF97' emoji='😜‍'
                              imageIndex={1}
                              image={this.state.imgList[1]}
                              onChangeImage={this.onChangeImage}/>
                </UploaderWrapper>

                <HelloText>
                    {'Face similarity gauge'}
                </HelloText>

                <GaugeWrapper>
                    <GaugeChart id="gauge-chart1"
                                percent={0.5}
                                nrOfLevels={20}
                                textColor={'#9B51E0'}
                                colors={['#AAAAAA', '#9B51E0']} />
                </GaugeWrapper>

                <GaugeButton onClick={() => this.onClickGauge()}>
                    Gauge!
                </GaugeButton>

                <MoreAPIsLink target='_blank'
                              rel='noopener noreferrer'
                              href={faceApiUrl}>
                    Get more face APIs
                </MoreAPIsLink>

                <Footer />

                {
                    this.state.modelReady === false
                        ? <Spinner message="Models are being loaded..."/> : ''
                }
                {
                    this.state.gauging === true
                        ? <Spinner message="Gauging..."/> : ''
                }
            </Wrapper>
        );
    }

}

export default AppPage;
