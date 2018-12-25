import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, fillUsername, fillPassword, logout, facebookLogin } from '../actions/loginActions';
import NavUser from '../component/NavUser';

class NavUserContainer extends Component {

  render() {
    // parameters
    const { filledUsername, filledPassword, loginStatus, myFirstname, myLastname, adminVerification } = this.props;
    // functions
    const { fillUsername, fillPassword, login, logout, facebookLogin } = this.props;
    return (
      <NavUser
        loginStatus={loginStatus}
        firstname={myFirstname}
        lastname={myLastname}
        userValue={filledUsername}
        passValue={filledPassword}
        activeLogin={login}
        activeLogout={logout}
        responseFacebook={facebookLogin}
        usernameOnChange={e => fillUsername(e.target.value)}
        passwordOnChange={e => fillPassword(e.target.value)}
        adminVerification={adminVerification}
      />
    );
  }
}
const mapStateToProp = state => ({
    filledUsername: state.filledUsername,
    filledPassword: state.filledPassword,
    loginStatus: state.loginStatus,
    myFirstname: state.myFirstname,
    myLastname: state.myLastname,
    adminVerification: state.adminVerification
});

const mapDispatchToProp = dispatch => ({
  fillUsername: username => dispatch(fillUsername(username)),
  fillPassword: password => dispatch(fillPassword(password)),
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
  facebookLogin: response => dispatch(facebookLogin(response))
});
export default connect(mapStateToProp, mapDispatchToProp)(withRouter(NavUserContainer));