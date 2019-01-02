import React, { Component } from 'react';
import NavbarContainer from './container/NavbarContainer';
import Main from './component/Main';

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
