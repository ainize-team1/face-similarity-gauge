import React from 'react';
import styled from 'styled-components';
import * as faceApi from 'face-api.js';
import { Status } from './../../constant';

const Wrapper = styled.div`
    width: 50%;
    height: 242px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.background || '#FFFFFF'};
    background: ${props => props.background || '#FFFFFF'};
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const Emoji = styled.div`
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

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const TargetImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const OverlayCanvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const TransparentImageInput = styled.input.attrs({
    type: 'file',
    accept: '.jpg, .jpeg, .png'
})`
    visibility: hidden;
    position: fixed;
`;

class Uploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgUrl: null,
        };
    }

    async updateImage(imgUrl) {
        this.props.updateStatus(Status.LOADING_IMAGE);
        this.setState({ imgUrl: imgUrl });
        const image = await faceApi.fetchImage(imgUrl);
        const wrapper = document.getElementById('imageWrapper');
        const canvas = document.getElementById('overlay' + this.props.index);
        const displaySize = {
            width: wrapper.clientWidth,
            height: wrapper.clientHeight,
        };
        faceApi.matchDimensions(canvas, displaySize);
        const detection = await faceApi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor();
        if (detection) {
            const resizedDetection = faceApi.resizeResults(detection,
                displaySize);
            this.props.updateDescriptor(resizedDetection.descriptor,
                this.props.index);
        } else {
            this.setState({ imgUrl: null });
            alert(`Can't detect a face! Please try another image`);
        }
        this.props.updateStatus(Status.NONE);
    }

    triggerInputFile = () => this.fileInput.click();

    render() {
        return (
            <Wrapper onClick={this.triggerInputFile}
                     background={this.props.background}>
                {this.state.imgUrl === null ?
                    (<div>
                        <Emoji>
                            {this.props.emoji}
                        </Emoji>
                        <Description>
                            Upload
                        </Description>
                    </div>) :
                    (<ImageWrapper id="imageWrapper">
                        <TargetImage src={this.state.imgUrl}/>
                        <OverlayCanvas id={'overlay' + this.props.index}/>
                    </ImageWrapper>)
                }

                <TransparentImageInput
                    ref={fileInput => this.fileInput = fileInput}
                    onChange={async (e) => {
                        await this.updateImage(
                            URL.createObjectURL(e.target.files[0]));
                    }}/>
            </Wrapper>
        );
    }

}

export default Uploader;
