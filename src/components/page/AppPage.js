import React from 'react';
import styled from 'styled-components';
import Uploader from '../ui/Uploader';
import GaugeChart from 'react-gauge-chart';

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
    background: #F2F2F2;
`;

const GaugeWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 40px;
`;

const HelloText = styled.text`
    margin-top: 53px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.15px;
`;

const ButtonWrapper = styled.div`
    text-align: center;
    margin-top: 32px;
`;

const GaugeButton = styled.button`
    width: 339px;
    height: 55px;
    border-radius: 10px;
    border: none;
    outline: none;
    family: IBM Plex Mono;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    background-color: #9b51e0;
`;

class AppPage extends React.Component {
    constructor() {
        super();

        this.state = {
            images: [null, null],
        };
    }

    onButtonClick = () => {
    }

    render() {
        return (
            <Wrapper>
                <UploaderWrapper>
                    <Uploader background='#2D9CDB' emoji='😜‍'
                              image={this.state.images[0]}/>
                    <Uploader background='#6FCF97' emoji='😜‍'
                              image={this.state.images[1]}/>
                </UploaderWrapper>

                <HelloText>
                    {'Face similarity gauge'}
                </HelloText>

                <GaugeWrapper>
                    <GaugeChart id="gauge-chart1" />
                </GaugeWrapper>

                <ButtonWrapper>
                    <GaugeButton
                        key={'gauge'}
                        onClick={() => this.onButtonClick()}>
                        {'Gauge!'}
                    </GaugeButton>
                </ButtonWrapper>
            </Wrapper>
        );
    }
}

export default AppPage;
