import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { getUserslist } from '../actions/loginActions';
import Userslist from '../component/Userslist';

class UserslistContainer extends Component {
  componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    const { getUserslist } = this.props;
    getUserslist();

  }
  render() {
    const { loginStatus, adminVerification, usersFirstname, usersLastname, usersId, usersAccount, usersAdmin } = this.props;
    return (loginStatus && adminVerification) ? (
      <Userslist
        usersFirstname={usersFirstname}
        usersLastname={usersLastname}
        usersId={usersId}
        usersAccount={usersAccount}
        usersAdmin={usersAdmin}
      />
    ) : <Redirect to='/' />;
  }
}
const mapStateToProp = state => ({
  loginStatus: state.loginStatus,
  adminVerification: state.adminVerification,
  usersFirstname: state.usersFirstname,
  usersLastname: state.usersLastname,
  usersId: state.usersId,
  usersAdmin: state.usersAdmin,
  usersAccount: state.usersAccount
});
const mapDispatchToProp = dispatch => ({
  getUserslist: () => dispatch(getUserslist())
});
export default connect(mapStateToProp, mapDispatchToProp)(UserslistContainer);