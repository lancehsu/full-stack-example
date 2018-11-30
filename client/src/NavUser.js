import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import './Navbar.css';

class NavUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      lastname: ''
    }
  }

  login = async () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username) {
      alert('Username needs to be filled!');
      return;
    }
    if (!password) {
      alert('Password needs to be filled!');
      return;
    }
    const status = await Auth.logIn(username, password);
    alert(status);
    //get login state
    const login = await Auth.checkLogIn();
    let lastname;
    if (login) {
      const response = await Auth.getUserInfo();
      lastname = response.lastname;
    } else {
      lastname = '';
    }
    this.setState({ login, lastname });
    //console.log(user);
    // success && this.setState({ token });
  }
  logout = () => {
    Auth.logOut();
    this.setState({ login: false });
  }

  render() {
    const { login, lastname } = this.state;

    return (
      <div className='Navuser'>
        {/* login mode: 'Hi, {lastname}!'; logout mode: Username; */
          login ? (
            <div>Hi, {lastname}!</div>
          ) : (
              <div>
                <div>Username: </div>
                <input type='text' id='username' defaultValue='dog'></input>
              </div>
            )
        }
        {
          login ? (
            <div><Link to='/me' className='link'>My Profile</Link></div>
          ) : (
              <div>
                <div>Password: </div>
                <input type='password' id='password' defaultValue='password'></input>
              </div>
            )
        }
        {
          login ? (
            <div><button className='logout' onClick={this.logout}>Logout</button></div>
          ) : (
              <div className='click'>
                <div><Link to='/register' className='register'>Register</Link></div>
                <div><button className='submit' onClick={this.login}>Login</button></div>
              </div>
            )
        }
      </div>

    );
  }
}

export default NavUser;