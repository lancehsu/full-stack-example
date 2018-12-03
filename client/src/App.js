import React, { Component } from 'react';
import NavList from './container/NavListContainer';
import NavUser from './container/NavUserContainer';
import Main from './container/Main';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='Navbar'>
          <NavList className='navList' />
          <NavUser className='navUser' />
        </nav>
        <Main className='Main' />
      </div>
    )
  }
}

export default App;
