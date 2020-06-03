import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    height: 242px;
    background: ${props => props.background || '#FFFFFF'};
`;

const Emoji = styled.div`
    margin-top: 80px;
    text-align: center;
    font-size: 32px;
`;

const Description = styled.div`
    margin-top: 11px;
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.15px;
    color: #FFFFFF;
`;

class Uploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Wrapper background={this.props.background}>
                <Emoji>
                    {this.props.emoji}
                </Emoji>
                <Description>
                    Upload
                </Description>
            </Wrapper>
        );
    }

}

export default Uploader;
