import React, { Component } from 'react';
import NavUser from '../component/NavUser';
import Auth from '../Auth';
import '../css/Navbar.css';

class NavUserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      name: ''
    }
  }

  activeLogin = async () => {
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
    try {
      const status = await Auth.logIn(username, password);
      alert(status);
      //get login state
      const login = await Auth.checkLogIn();

      if (!login) { return; }

      const response = await Auth.getUserInfo();
      const { firstname, lastname } = response;
      const name = `${firstname} ${lastname}`;
      this.setState({ login, name });
    } catch (err) {
      alert(err);
    }
  }

  activeLogout = () => {
    Auth.logOut();
    this.setState({ login: false, lastname: '' });
  }

  responseFacebook = (response) => {
    console.log(response);
    const { name } = response;
    this.setState({ login: true, name })
  }

  render() {
    const { login, name } = this.state;
    const activeLogin = this.activeLogin;
    const activeLogout = this.activeLogout;
    const responseFacebook = this.responseFacebook;
    return <NavUser login={login} name={name} activeLogin={activeLogin} activeLogout={activeLogout} responseFacebook={responseFacebook} />;
  }
}

export default NavUserContainer;