import React, { Component } from 'react';
import { render } from 'react-dom';
import Masquill from './components/Masquill';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Masquill />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
