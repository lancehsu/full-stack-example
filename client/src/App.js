import React, { Component } from 'react';
import NavList from './NavList.js';
import NavUser from './NavUser.js';
import Main from './Main.js';

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
