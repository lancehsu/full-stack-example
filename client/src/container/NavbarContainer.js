import React, { Component } from 'react';
import { connect } from 'react-redux';
import { homeScrolling } from '../actions/homeActions';
import { login, fillUsername, fillPassword, logout } from '../actions/loginActions';
import Navbar from '../component/Navbar';

class NavbarContainer extends Component {

  render() {
    // parameters
    const { filledUsername, filledPassword, loginStatus, myFirstname, myLastname, adminVerification } = this.props;
    // functions
    const { homeScrolling, fillUsername, fillPassword, login, logout } = this.props;
    return (
      <Navbar
        handleClick={e => homeScrolling(e.target.id)}
        adminVerification={adminVerification}
        loginStatus={loginStatus}
        firstname={myFirstname}
        lastname={myLastname}
        userValue={filledUsername}
        passValue={filledPassword}
        activeLogin={login}
        activeLogout={logout}
        usernameOnChange={e => fillUsername(e.target.value)}
        passwordOnChange={e => fillPassword(e.target.value)}
    />
    );
  }
}
const mapStateToProp = state => ({
  adminVerification: state.adminVerification,
  filledUsername: state.filledUsername,
  filledPassword: state.filledPassword,
  loginStatus: state.loginStatus,
  myFirstname: state.myFirstname,
  myLastname: state.myLastname,
});
const mapDispatchToProp = dispatch => ({
  homeScrolling: scrollingIdx => dispatch(homeScrolling(scrollingIdx)),
  fillUsername: username => dispatch(fillUsername(username)),
  fillPassword: password => dispatch(fillPassword(password)),
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
})

export default connect(mapStateToProp, mapDispatchToProp)(NavbarContainer);