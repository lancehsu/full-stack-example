import React from 'react';
import { Link } from 'react-router-dom';
// import FacebookLogin from 'react-facebook-login';
import { navStyle, navList, navTextStyle, logo, navuserLoginStyle, navuserNonloginStyle, logoutButtonStyle, loginButtonStyle } from '../style/Style';
import Radium from 'radium';

const { margin, ...navTextStyleRest } = navTextStyle;

const Navbar = ({
  handleClick, adminVerification, loginStatus, firstname,
  lastname, userValue, passValue, usernameOnChange, passwordOnChange,
  activeLogin, activeLogout, responseFacebook
}) => (
    <nav className='Navbar' style={navStyle}>
      <div className='Navlist' style={navList}>
        <Link to='/' onClick={handleClick}><div id='logo' key={0} style={logo} /></Link>
        <Link to='/' onClick={handleClick} style={{ textDecoration: 'none' }}><div id='aboutus' key={1} style={navTextStyle}>About us</div></Link>
        <Link to='/promos' style={{ textDecoration: 'none' }}><div key={2} style={navTextStyle}>Promotions</div></Link>
        <Link to='/menu' style={{ textDecoration: 'none' }}><div key={3} style={navTextStyle}>Menu</div></Link>
        <Link to='/staffs' style={{ textDecoration: 'none' }}><div key={4} style={navTextStyle}>Staffs</div></Link>
        <Link to='/favoritelist' style={{ textDecoration: 'none' }}><div key={5} style={navTextStyle}>Favorites</div></Link>
        {adminVerification && <Link to='/userslist' style={{ textDecoration: 'none' }}><div key={6} style={navTextStyle}>Users</div></Link>}
      </div>
      {loginStatus ? (
        <div className='Navuser' style={navuserLoginStyle}>
          <div style={{ margin: '0px 10px' }}>Hi, {(firstname || lastname) ? `${firstname} ${lastname}` : 'guest'}!</div>
          <Link to='/me' style={{ textDecoration: 'none' }}><div style={{ ...navTextStyleRest, margin: '0px 10px' }}>My Profile</div></Link>
          <div className='logout' onClick={activeLogout} style={logoutButtonStyle}>Logout</div>
        </div>
      ) : (
          <div className='Navuser' style={navuserNonloginStyle}>
            <LoginInput id='username' value={userValue} onChange={usernameOnChange} />
            <LoginInput id='password' value={passValue} onChange={passwordOnChange} />
            <Link to='/register' className='register' style={{ textDecoration: 'none' }}><div style={{ ...navTextStyle, fontSize: '80%' }}>Register</div></Link>
            <div className='submit' onClick={activeLogin} style={loginButtonStyle}>Login</div>
            {/*<FbLogin callback={responseFacebook} />*/}
          </div>
        )}
    </nav>
  );

// const FbLogin = ({ callback }) => (
//   <FacebookLogin
//     appId=''
//     autoLoad={false}
//     fields='name,email'
//     textButton='Login'
//     size='small'
//     icon='fa-facebook'
//     callback={callback}
//   />
// );

const LoginInput = ({ id, value, onChange }) => (
  <input
    id={id}
    type={id === 'username' ? 'text' : 'password'}
    style={{ margin: '0px 10px' }}
    maxLength='8'
    size='16'
    placeholder={id === 'username' ? 'Username' : 'Password'}
    value={value}
    onChange={onChange}
  />
);

export default Radium(Navbar);