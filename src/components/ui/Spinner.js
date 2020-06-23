import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 75%;
    left: 50%;
    margin-left: -37.5%;
    top: 30%;
`;

const StyledLoader = styled(Loader)`
    align-self: center;
`;

const LoadingText = styled.div`
    text-align: center;
    color: #9B51E0;
    font-weight: bold;
`;

class Spinner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <Wrapper>
                <StyledLoader type='TailSpin'
                              color='#9B51E0'
                              height={80}
                              width={80}/>

                <LoadingText>
                    {this.props.message}
                </LoadingText>
            </Wrapper>
        );
    }
}

export default Spinner;
