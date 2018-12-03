import React from 'react';


const Register = ({signup}) => (
      <div className='Register'>
        <h1>Register</h1>
        <div className='context'>
          <div>Username:<input type='text' id='register-username'></input></div>
          <div>Password:<input type='password' id='register-password'></input></div>
          <div>Firstname:<input type='text' id='register-firstname'></input></div>
          <div>Lastname:<input type='text' id='register-lastname'></input></div>
          <div><button onClick={signup}>Submit</button></div>
        </div>
      </div>
    );

export default Register;