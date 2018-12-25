import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Me from '../component/Me';

class MeContainer extends Component {

  componentWillMount() {
    const { loginStatus } = this.props;
    !loginStatus && alert('Login first!');
  }

  render() {
    const { loginStatus, userFirstname, userLastname, userAccount } = this.props;
    return loginStatus ? <Me firstname={userFirstname} lastname={userLastname} username={userAccount} /> : <Redirect to='/' />;
  }
}
const mapStateToProp = state => ({
  loginStatus: state.loginStatus,
  userFirstname: state.userFirstname,
  userLastname: state.userLastname,
  userAccount: state.userAccount
});

export default connect(mapStateToProp)(MeContainer);