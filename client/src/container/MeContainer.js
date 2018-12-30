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
    const { loginStatus, myFirstname, myLastname, myAccount } = this.props;
    return loginStatus ? <Me firstname={myFirstname} lastname={myLastname} username={myAccount} /> : <Redirect to='/' />;
  }
}
const mapStateToProp = state => ({
  loginStatus: state.loginStatus,
  myFirstname: state.myFirstname,
  myLastname: state.myLastname,
  myAccount: state.myAccount
});

export default connect(mapStateToProp)(MeContainer);