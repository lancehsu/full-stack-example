import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import '../css/Navbar.css';

const NavUser = ({ login, name, activeLogin, activeLogout, responseFacebook }) =>
  login ? (
    <div className='Navuser login'>
      <div>Hi, {(name.trim())? name : 'guest'}!</div>
      <div><Link to='/me' className='link'>My Profile</Link></div>
      <div><button className='logout' onClick={activeLogout}>Logout</button></div>
    </div>
  ) : (
      <div className='Navuser no-login'>
        <div>
          <div>Username: </div>
          <input type='text' id='username' defaultValue='dog'></input>
        </div>
        <div>
          <div>Password: </div>
          <input type='password' id='password' defaultValue='password'></input>
        </div>
        <div className='click'>
          <div><Link to='/register' className='register'>Register</Link></div>
          <div><button className='submit' onClick={activeLogin}>Login</button></div>
        </div>
        <FbLogin callback={responseFacebook} />
      </div>
    );


const FbLogin = ({ callback }) => (
  <FacebookLogin
    appId='235880893671025'
    autoLoad={false}
    fields="name,email,picture"
    textButton='Login'
    size='small'
    icon='fa-facebook'
    callback={callback}
  />
);

export default NavUser;