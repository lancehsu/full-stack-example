import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = ({ dishId, dishName, dishImg, dishFallbackImg, viewDish, promoImg, promoFallbackImg, nextOne }) => (
  <div className='Home'>
    <div id='profile-img' className='home-item'></div>
    <div className='promo home-item'>
      <div><h1>Promotions</h1></div>
      <div className='promo-container'>
        <img className='promo-img' src={promoImg[promoImg.length - 1]} onError={(e) => { e.target.onerror = null; e.target.src = promoFallbackImg }} alt='img break' />
        <Link to='/promotions' className='icon'>Go!</Link>
      </div>
    </div>
    <div id='profile-menu' className='home-item'>
      <div><h1><Link to='/menu' id='menu-title'>Menu</Link></h1></div>
      <div className='menu-scroll-plate'>
        <div onClick={nextOne} className='arrow' id='left'></div>
        <div className='dish-container'>
          {viewDish.map((i) => (
            <div className='dish' key={dishId[i]}>
              <div className='dish-img-container'>
                <Link to={`/menu/${dishId[i]}`}>
                  <img className='dish-img' src={dishImg[i]} onError={(e) => { e.target.onerror = null; e.target.src = dishFallbackImg }} alt='img break' />
                </Link>
              </div>
              <div className='dish-name'>{dishName[i]}</div>
            </div>
          ))}
        </div>
        <div onClick={nextOne} className='arrow' id='right'></div>
      </div>
    </div>
    <div id='aboutus' className='home-item'>
      <h1>About Us</h1>
      <p>Here is our info.</p>
    </div>
  </div>
);

export default Home;