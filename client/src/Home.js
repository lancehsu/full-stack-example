import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div class='Home'>
        <div class='container'>
          <div id='profile-img' class='item'></div>
          <div id='promo' class='item'>
            <h1><Link to='/promotions'>Promotions</Link></h1>
          </div>
          <div id='profile-menu' class='item'>
            <h1><Link to='/menu'>Menu</Link></h1>
            <div id='scroll-plate'></div>
          </div>
          <div id='aboutus' class='item'>
            <h1>About Us</h1>
            <p>Here is our info.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;