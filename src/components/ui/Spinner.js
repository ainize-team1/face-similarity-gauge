import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 30%;
`;

const StyledLoader = styled(Loader)`
    align-self: center;
`;

const LoadingText = styled.div`
    text-align: center;
    color: #FFFFFF;
    font-weight: bold;
`;

class Spinner extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (
            <Wrapper>
                <StyledLoader type='TailSpin'
                              color='#FFFFFF'
                              height={80}
                              width={80}/>

                <LoadingText>
                    {'Models are being loaded...'}
                </LoadingText>
            </Wrapper>
        );
    }
}

export default Spinner;
