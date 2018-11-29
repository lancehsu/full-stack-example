import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

class NavUser extends Component {
  constructor(props) {
    super(props);
  }
  erase() {

  }

  render() {
    return (
      <div className='Navuser'>
        <div>
          <div>Username: </div>
          <input type='text' id='username'></input>
        </div>
        <div>
          <div>Password: </div>
          <input type='text' id='password'></input>
        </div>
        <div className='click'>
          <div><Link to='/register' className='register'>Register</Link></div>
          <div><button class='submit'>Login</button></div>
        </div>
      </div>
    );
  }
}

export default NavUser;