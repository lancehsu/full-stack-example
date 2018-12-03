import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const NavList = ({ handleClick }) => (
  <div className='Navlist'>
    <div className='link' id='logo' onClick={handleClick}></div>
    <div className='link' id='to-aboutus' onClick={handleClick}>About us</div>
    | <div><Link to='/promotions' className='link'>Promotions</Link></div>
    | <div><Link to='/menu' className='link'>Menu</Link></div>
    | <div><Link to='/staffs' className='link'>Staffs</Link></div>
    | <div><Link to='/favorites' className='link'>Favorites</Link></div>
  </div>
)

export default NavList;