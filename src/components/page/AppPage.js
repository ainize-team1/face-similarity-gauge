import React from 'react';
import styled from 'styled-components';
import Uploader from '../ui/Uploader';
import * as faceApi from 'face-api.js';
import Spinner from './../ui/Spinner';

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

const HelloText = styled.text`
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: normal;
    font-size: 25px;
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
    margin-left: auto;
    margin-right: auto;
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
            this.setState({modelReady: true});
        });
    }

    render() {
        return (
            <Wrapper>
                {
                    this.state.modelReady === false ? <Spinner message="Models are being loaded..."/> : ''
                }
                {
                    this.state.gauging === true ? <Spinner message="Gauging..."/> : ''
                }

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
                    {'Hello worldsssss!'}
                    <br/>
                    {'Result:'}{JSON.stringify(this.state.result)}
                </HelloText>

                <GaugeButton onClick={() => this.onClickGauge()}>
                    Gauge!
                </GaugeButton>
            </Wrapper>
        );
    }

    onClickGauge = async () => {
        this.setState({gauging: true});
        const inputs = [undefined, undefined];
        const descriptors = [undefined, undefined];

        for (let i=0; i<2; i++) {
            inputs[i] = await faceApi.fetchImage(this.state.imgList[i]);
            descriptors[i] = await faceApi.computeFaceDescriptor(inputs[i]);
        }

        const distance = faceApi.euclideanDistance(descriptors[0], descriptors[1]);

        console.log(JSON.stringify(descriptors[0]));
        this.setState({result: distance});
        this.setState({gauging: false});
    };

    onChangeImage = (img, index) => {
        this.state.imgList[index] = img;
        this.setState({});
    };

    loadModel = async () => {
        await faceApi.loadFaceRecognitionModel('/models');
    };
}

export default AppPage;
