// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
// Styled-components
import styled from 'styled-components';
// Pages
import AppPage from './components/page/AppPage';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const globalNavigationBar = (
    <Wrapper>
        <Router>
            {/* Content */}
            <Switch>
                <Route exact path='/' component={AppPage} />
                <Route exact path='/healthz' component={() => { return (<div>OK</div>); }} />
            </Switch>
        </Router>
    </Wrapper>
)

ReactDOM.render(globalNavigationBar, document.getElementById('root'));
