import React from 'react';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
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
        };
    }

    render() {
        return (
            <Wrapper>
                <HelloText>
                    {"Hello world!"}
                </HelloText>
            </Wrapper>
        );
    }
}

export default AppPage;
