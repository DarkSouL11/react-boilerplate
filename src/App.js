import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

import LazyComponent from 'components/LazyComponent';
import logo from 'assets/images/logo.png';

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;

class ClassComponent extends Component {
  state = {
    feedbacks: []
  };

  componentDidMount() {
    console.log('ENV', process.env);
    console.log('Component has been mounted');
    console.log('Performing few es6/7/8 operations');
    const feedbacks = [
      {
        framework: 'React',
        feedback: 'Is awesome!',
        createdBy: 'Facebook',
      },
      {
        framework: 'Vue',
        feedback: 'Is more awesome',
        createdBy: 'Evan You'
      },
    ];
    this.setState({
      feedbacks: [
        ...feedbacks,
        {
          framework: 'Angular',
          feedback: 'Getting better now by copying from others',
          createdBy: 'Google'
        }
      ]
    }, this._logStateAsTable);
  }

  _logStateAsTable = () => {
    const { feedbacks } = this.state;
    console.table(feedbacks);
    // throw new Error('Dummy');
  }

  render() {
    return (
      <div>
        <Title>I am a class based component</Title>
        <div>
          <img alt="Logo" src={logo} />
        </div>
        <Link to="/lazy">
          Load Lazy
        </Link>
      </div>
    );
  }
}

function App() {
  return (
    <Router>
      <Switch>
        <Route
          component={ClassComponent}
          exact
          path="/"
        />
        <Route
          component={LazyComponent}
          exact
          path="/lazy"
        />
      </Switch>
    </Router>
  );
}


export default App;
