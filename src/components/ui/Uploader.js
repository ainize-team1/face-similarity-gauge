import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 50%;
    height: 242px;
    background: ${props => props.background || '#FFFFFF'};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
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

        this.state = {
            test: 'd',
        };
    }

    render() {
        return (
            <Wrapper onClick={this.triggerInputFile}
                     background={this.props.image
                         ? `url(${this.props.image})`
                         : this.props.background}>
                {this.props.image !== null ||
                (<div>
                    <Emoji>
                        {this.props.emoji}
                    </Emoji>
                    <Description>
                        Upload({this.state.test})
                    </Description>
                </div>)
                }

                <input
                    style={{visibility: 'hidden'}}
                    ref={fileInput => this.fileInput = fileInput}
                    type="file"
                    onChange={(e) => this.props.onChangeImage(
                        URL.createObjectURL(e.target.files[0]),
                        this.props.imageIndex)}
                    accept=".jpg, .jpeg, .png"/>
            </Wrapper>
        );
    }

    triggerInputFile = () => this.fileInput.click();
}

export default Uploader;
