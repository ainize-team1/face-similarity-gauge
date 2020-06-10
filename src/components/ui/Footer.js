import React from 'react';
import styled from 'styled-components';

const githubURL = 'https://github.com/ainize-team1/face-api';
const ainizeURL = 'https://ainize.ai/';

const githubImagePath = require('../../static/img/github.svg');
const ainizeImagePath = require('../../static/img/ainize.svg');

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-top: 32px;
    margin-bottom: 24px;
`;

const Row = styled.div`
    cursor: pointer;
    margin-left: 10px;
    font-size: 0.8rem;
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

    render() {
        return (
            <Wrapper>
                <Row onClick={() => window.open(githubURL, '_blank')}>
                    {'Contribute on'}

                    <Icon style={{paddingBottom: '2px'}} src={githubImagePath} />
                </Row>
                <Row onClick={() => {
                    window.gtag('event', 'poweredby_click', {
                        'event_category': 'spotainize_common',
                        'non_interaction': false,
                    });

                    window.open(ainizeURL, '_blank');
                }}>
                    {'Live on'}

                    <Icon style={{paddingBottom: '3px'}} src={ainizeImagePath} />
                </Row>
            </Wrapper>
        );
    };
}

export default Footer;
