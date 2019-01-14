import React from 'react';
import { Link } from 'react-router-dom';
import {
  homeStyle, profileImg, menuPlateStyle, promoIconStyle, promoContainerStyle,
  menuTitleStyle, menuImgStyle, menuPlateLeftArrowStyle, menuPlateRightArrowStyle,
  dishContainerStyle, itemStyle, color
} from '../style/Style';
import Radium from 'radium';

const dishFallbackImg = '/images/empty-dish.jpg';
const promoFallbackImg = '/images/promotions-icon.jpg';

const Home = ({ dishId, dishName, dishImg, viewDish, promoImg, nextOne }) => (
  <div className='Home' style={homeStyle}>
    <div id='profile-img' style={{ ...itemStyle, ...profileImg }}></div>
    <HomePromo promoImg={promoImg} />
    <HomeMenu nextOne={nextOne} viewDish={viewDish} dishId={dishId} dishImg={dishImg} dishName={dishName} />
    <div id='aboutus' style={{ ...itemStyle, backgroundColor: color.backgroundColor }}>
      <div style={{ fontSize: '250%', fontWeight: 'bold', margin: '80px 0px' }}>About Us</div>
      <p>Here is our info.</p>
    </div>
  </div>
);

const HomePromo = Radium(({ promoImg }) => (
  <div
    className='HomePromo'
    style={{ ...itemStyle, backgroundColor: color.homeBackgroundColor, height: 700 }}
  >
    <div style={{ fontSize: '250%', fontWeight: 'bold', margin: '80px 0px' }}>Promotions</div>
    <div className='promo-container' style={promoContainerStyle}>
      <img
        className='promo-img'
        src={promoImg[promoImg.length - 1]}
        onError={e => { e.target.onerror = null; e.target.src = promoFallbackImg }}
        alt='img break'
        style={{ width: 600, height: 400 }}
      />
      <Link
        to='/promos'
        className='icon'
        style={{ textDecoration: 'none' }}
      >
        <div style={promoIconStyle}>
          Go!
          </div>
      </Link>
    </div>
  </div>
));

const HomeMenu = Radium(({ nextOne, viewDish, dishId, dishImg, dishName }) => (
  <div className='HomeMenu' style={{ ...itemStyle, backgroundColor: color.homeBackgroundColor, height: 700 }}>
    <Link to='/menu' className='title' style={{ textDecoration: 'none' }}><div style={menuTitleStyle}>Menu</div></Link>
    <div className='menu-plate' style={menuPlateStyle}>
      <div onClick={nextOne} className='arrow' id='left' key='left' style={menuPlateLeftArrowStyle}></div>
      <div className='dish-container' style={dishContainerStyle}>
        {viewDish.map((i) => (
          <div className='dish' key={i}>
            <div className='dish-img-container'>
              <Link to={`/menu/${dishId[i]}`}>
                <img
                  className='dish-img'
                  src={dishImg[i]}
                  onError={e => { e.target.onerror = null; e.target.src = dishFallbackImg }}
                  alt='img break'
                  key={i}
                  style={menuImgStyle}
                />
              </Link>
            </div>
            <div className='dish-name' style={{ fontSize: '70%', paddingTop: 10 }}>{dishName[i]}</div>
          </div>
        ))}
      </div>
      <div onClick={nextOne} className='arrow' id='right' key='right' style={menuPlateRightArrowStyle}></div>
    </div>
  </div>
));

export default Home;