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

class AppPage extends React.Component {
    constructor() {
        super();

        this.state = {
            images: [null, null],
        };
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
            </Wrapper>
        );
    }
}

export default AppPage;
