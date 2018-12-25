import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import { pageStyle, pageItemImgStyle, pageContainerStyle, pageItemStyle, pageItemNameStyle, heartCheckboxStyle } from '../style/Style';

const fallbackImg = '/images/empty-dish.jpg';
const Favorites = ({ ids, names,imgs, loginStatus, checked, modifyFavorite }) => {
  return (
    <div className='Favorites' style={pageStyle}>
      <div className='title'>
        <h1>Favorites</h1>
      </div>
      <div className='container' style={pageContainerStyle}>
        {names && names.map((name, i) => (
          <div className='item' key={i} style={pageItemStyle}>
            <div className='item-img-container'>
              <Link to={`/menu/${ids[i]}`}>
                <img
                  className='item-img'
                  src={imgs[i]}
                  onError={e => { e.target.onerror = null; e.target.src = fallbackImg }}
                  alt='img break'
                  key={i}
                  style={pageItemImgStyle}
                />
              </Link>
            </div>
            <div className='item-name' style={{ ...pageItemNameStyle, display: 'flex' }}>
              <div className='heart-checkbox' id={ids[i]} onClick={modifyFavorite} style={{ ...heartCheckboxStyle(checked), width: 20, height: 18, marginRight: 15 }} />
              {name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Radium(Favorites);
