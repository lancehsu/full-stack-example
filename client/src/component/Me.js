import React from 'react';
import { pageStyle, sheetStyle } from '../style/Style';

const Me = ({ firstname, lastname, username }) => (
  <div className='Me' style={pageStyle}>
    <div><h1>My Profile</h1></div>
    <div style={sheetStyle}>
      <div>Username: {username}</div>
      <div>Firstname : {firstname}</div>
      <div>Lastname : {lastname}</div>
    </div>
  </div>
);

export default Me;