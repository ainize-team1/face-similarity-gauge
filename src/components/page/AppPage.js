import React from 'react';
import styled from 'styled-components';
import Uploader from '../ui/Uploader';

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

const HelloText = styled.text`
    margin-top: 16px;
    margin-bottom: 16px;
    font-weight: normal;
    font-size: 25px;
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
                    {'Hello worldsssss!'}
                </HelloText>
            </Wrapper>
        );
    }
}

export default AppPage;
