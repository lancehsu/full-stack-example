import React, { Component } from 'react';
import NavbarContainer from '../container/NavbarContainer';
import Main from './Main';

class App extends Component {

  render() {
    return (
      <div className='App'>
        <NavbarContainer />
        <Main />
      </div>
    );
  }
}

export default App;
