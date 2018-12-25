import React from 'react';
import { pageStyle, sheetStyle } from '../style/Style';

const {width, alignItems ,...rest} = sheetStyle;

const Users = ({ usersFirstname, usersLastname, usersId, usersAccount, usersAdmin }) => (
  <div className='Register' style={pageStyle}>
    <h1>Users List</h1>
    <div className='context' style={{...rest, width: '90%', fontSize: '60%'}}>
      {usersId && usersId.map((id, i) => (
        <div style={{display: 'flex'}} key={i}>
          <div style={{marginRight: 5}}>ID:</div><div style={{marginRight: 10}}>{id}</div>
          <div style={{marginRight: 5}}>Username:</div><div style={{marginRight: 10}}>{usersAccount[i]}</div>
          <div style={{marginRight: 5}}>Firstname:</div><div style={{marginRight: 10}}>{usersFirstname[i]}</div>
          <div style={{marginRight: 5}}>Lastname:</div><div style={{marginRight: 10}}>{usersFirstname[i]}</div>
          <div style={{marginRight: 5}}>Admin:</div><div> {`${usersAdmin[i]}`}</div>
        </div>
      ))

      }
    </div>
  </div>
);

export default Users;