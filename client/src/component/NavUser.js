import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { navuserLoginStyle, navuserNonloginStyle, navTextStyle, logoutButtonStyle } from '../style/Style';
import Radium from 'radium';

const NavUser = ({ loginStatus, firstname, lastname, userValue, passValue, usernameOnChange, passwordOnChange, activeLogin, activeLogout, responseFacebook }) => {
  return loginStatus ? (
    <div className='Navuser' style={navuserLoginStyle}>
      <div>Hi, {(firstname || lastname) ? `${firstname} ${lastname}` : 'guest'}!</div>
      <Link to='/me' style={{ textDecoration: 'none' }}><div style={navTextStyle}>My Profile</div></Link>
      <div className='logout' onClick={activeLogout} style={logoutButtonStyle}>Logout</div>
    </div>
  ) : (
      <div className='Navuser' style={navuserNonloginStyle}>
        <LoginInput id='username' value={userValue} onChange={usernameOnChange} />
        <LoginInput id='password' value={passValue} onChange={passwordOnChange} />
        <div>
          <Link to='/register' className='register' style={{ textDecoration: 'none' }}><div style={{ ...navTextStyle, fontSize: '80%' }}>Register</div></Link>
          <div className='submit' onClick={activeLogin} style={{ ...logoutButtonStyle, marginTop: 5 }}>Login</div>
        </div>
        <FbLogin callback={responseFacebook} />
      </div>
    );
};
const FbLogin = ({ callback }) => (
  <FacebookLogin
    appId=''
    autoLoad={false}
    fields="name,email"
    textButton='Login'
    size='small'
    icon='fa-facebook'
    callback={callback}
  />
);

const LoginInput = ({ id, value, onChange }) => (
  <input
    id={id}
    type={id === 'username' ? 'text' : 'password'}
    maxLength='8'
    size='16'
    placeholder={id === 'username' ? 'Username' : 'Password'}
    value={value}
    onChange={onChange}
  />
);

export default Radium(NavUser);