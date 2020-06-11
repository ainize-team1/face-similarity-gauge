import React from 'react';
import styled from 'styled-components';

const githubURL = 'https://github.com/ainize-team1/face-api';
const ainizeURL = 'https://ainize.ai/';

const githubImagePath = require('../../static/img/github.svg');
const ainizeImagePath = require('../../static/img/ainize.svg');

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 97px;
`;

const IconWrapper = styled.div`
    cursor: pointer;
    font-family: Montserrat;
    font-style: normal;
    font-size: 0.8rem;
    color: #8E8E94;
    display: table-cell;
    vertical-align: middle;
`;

const Icon = styled.img`
    vertical-align: middle;
    margin-left: 10px;
`;

class Footer extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    OnIconClick = (url) => {
        window.open(url, '_blank');
        // Comment out when GA ready
        // window.gtag('event', 'poweredby_click', { 'event_category': 'spotainize_common',
        //                                           'non_interaction': false, });
    }

    render() {
        return (
            <Wrapper>
                <IconWrapper onClick={() => this.OnIconClick(ainizeURL)}>
                    <Icon style={{paddingBottom: '3px', paddingRight: '7px'}} src={ainizeImagePath} />
                    {'Powered by Ainize'}
                </IconWrapper>

                <IconWrapper style={{marginTop: '20px'}}
                             onClick={() => this.OnIconClick(githubURL)}>
                    <Icon style={{paddingBottom: '3px', paddingRight: '5.5px'}} src={githubImagePath} />
                    {'Contribute on Github'}
                </IconWrapper>
            </Wrapper>
        );
    };
}

export default Footer;
