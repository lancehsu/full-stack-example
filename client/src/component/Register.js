import React from 'react';
import { pageStyle, submitButtonStyle, sheetStyle } from '../style/Style';


const Register = ({ signup, signupUsername, signupPassword, signupFirstname, signupLastname, inputChangeHandler }) => (
  <div className='Register' style={pageStyle}>
    <h1>Register</h1>
    <div className='context' style={sheetStyle}>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '80%', marginRight: 20 }}>Username:</div>
        <input type='text' id='signup-username' maxLength='8' placeholder='4-8 characters' value={signupUsername} onChange={inputChangeHandler} />
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '80%', marginRight: 20 }}>Password:</div>
        <input type='password' id='signup-password' maxLength='8' placeholder='4-8 characters' value={signupPassword} onChange={inputChangeHandler} />
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '80%', marginRight: 20 }}>Firstname:</div>
        <input type='text' id='signup-firstname' maxLength='20' value={signupFirstname} onChange={inputChangeHandler} />
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '80%', marginRight: 20 }}>Lastname:</div>
        <input type='text' id='signup-lastname' maxLength='20' value={signupLastname} onChange={inputChangeHandler} />
      </div>
      <div onClick={signup} style={submitButtonStyle}>Submit</div>
    </div>
  </div>
);

export default Register;