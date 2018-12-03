import React from 'react';
import '../css/Pages.css';

const Me = ({ firstname, lastname, username }) => (
  <div className='Me'>
    <div><h1>My Profile</h1></div>
    <div><h2>Firstname : {firstname}</h2></div>
    <div><h2>Lastname : {lastname}</h2></div>
    <div><h2>Username : {username}</h2></div>
  </div>
);

export default Me;