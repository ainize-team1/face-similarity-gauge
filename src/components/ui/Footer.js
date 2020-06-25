import React from 'react';
import styled from 'styled-components';

const githubURL = 'https://github.com/ainize-team1/face-api';
const ainizeURL = 'https://ainize.ai/';

const githubImagePath = require('../../static/img/github.svg');
const ainizeImagePath = require('../../static/img/ainize.svg');

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-top: 160px;
    margin-bottom: 17px;
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
`;

class Footer extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    OnIconClick = (url) => {
        window.open(url, '_blank');
    }

    OnAinizeClick = (url) => {
        window.open(url, '_blank');
        window.gtag('event', 'poweredby_click', { 'event_category': 'spotainize_common',
                                                  'non_interaction': false, });
    }

    render() {
        return (
            <Wrapper>
                <IconWrapper onClick={() => this.OnIconClick(ainizeURL)}>
                    <Icon style={{paddingBottom: '3px', paddingRight: '7px'}} src={ainizeImagePath} />
                    {'Powered by Ainize'}
                </IconWrapper>

                <IconWrapper style={{marginLeft: '34px'}}
                             onClick={() => this.OnIconClick(githubURL)}>
                    <Icon style={{paddingBottom: '3px', paddingRight: '5.5px'}} src={githubImagePath} />
                    {'Contribute on Github'}
                </IconWrapper>
            </Wrapper>
        );
    };
}

export default Footer;
