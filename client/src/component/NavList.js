import React from 'react';
import { Link } from 'react-router-dom';
import { navList, navTextStyle, logo } from '../style/Style';
import Radium from 'radium';

const NavList = ({ handleClick, adminVerification }) => (
  <div className='Navlist' style={navList}>
    <div id='logo' onClick={handleClick} style={logo}/>
    <div id='to-aboutus' onClick={handleClick} key='0' style={{...navTextStyle, textDecoration: 'none'}}>About us</div>
    | <Link to='/promotions' style={{textDecoration: 'none'}}><div key='1' style={navTextStyle}>Promotions</div></Link>
    | <Link to='/menu' style={{textDecoration: 'none'}}><div key='2' style={navTextStyle}>Menu</div></Link>
    | <Link to='/staffs' style={{textDecoration: 'none'}}><div key='3' style={navTextStyle}>Staffs</div></Link>
    | <Link to='/favorites' style={{textDecoration: 'none'}}><div key='4' style={navTextStyle}>Favorites</div></Link>
    {adminVerification && <Link to='/users' style={{textDecoration: 'none'}}><div key='5' style={navTextStyle}>| Users</div></Link>}
  </div>
);

export default Radium(NavList);