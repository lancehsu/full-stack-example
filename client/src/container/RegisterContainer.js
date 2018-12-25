import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import Register from '../component/Register';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupUsername: '',
      signupPassword: '',
      signupFirstname: '',
      signupLastname: '',
      signupSuccess: false
    }
  }
  inputChangeHandler = (e) => {
    const value = e.target.value;
    const idArr = e.target.id.split('-');
    const input = `${idArr[0]}${idArr[1][0].toUpperCase()}${idArr[1].slice(1)}`;
    this.setState({ [input]: value });
  }
  signup = async () => {
    try {
      const { signupUsername, signupPassword, signupFirstname, signupLastname } = this.state;
      const minLength = 4; // minLength of username and password input
      if (signupUsername.length < minLength) {
        alert('Username should be 4 - 8 characters');
        return;
      }
      if (signupPassword.length < minLength) {
        alert('Password should be 4 - 8 characters');
        return;
      }
      const response = await axios.post('/users/signup',
        JSON.stringify({ username: signupUsername, password: signupPassword, firstname: signupFirstname, lastname: signupLastname }), {
        headers: { 'Content-Type': 'application/json' }
      });
      const { data } = response;
      alert(data.status);
      this.setState({ signupSuccess: true });
    } catch (err) {
      console.log(err);
    }

  }
  render() {
    const { signupSuccess, signupUsername, signupPassword, signupFirstname, signupLastname } = this.state;
    const { loginStatus } = this.props;

    return loginStatus || signupSuccess ? (
      <Redirect to='/' />
    ) : (
        <Register
          signup={this.signup}
          signupUsername={signupUsername}
          signupPassword={signupPassword}
          signupFirstname={signupFirstname}
          signupLastname={signupLastname}
          inputChangeHandler={this.inputChangeHandler}
        />
      );
  }
}
const mapStateToProp = state => ({
  loginStatus: state.loginStatus,
});
export default connect(mapStateToProp)(RegisterContainer);