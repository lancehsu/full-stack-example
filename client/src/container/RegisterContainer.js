import React, { Component } from 'react';
import Register from '../component/Register';

class RegisterContainer extends Component {
  signup = async () => {

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const firstname = document.getElementById('register-firstname').value;
    const lastname = document.getElementById('register-lastname').value;

    try {
      const response = await fetch('/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password, firstname, lastname }),
        headers: { 'Content-Type': 'application/json' }
      });
      const { status, err } = await response.json();
      alert(status || err.message);
    } catch (err) {
      console.log(err);
    }

  }
  render() {
    const signup = this.signup;
    return <Register signup={signup} />;
  }
}
export default RegisterContainer;