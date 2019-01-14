import React from 'react';
import { detailTitleStyle, heartCheckboxStyle } from '../style/Style';

const fallbackImg = '/images/empty-dish.jpg';

const MenuDetail = ({ loginStatus, checked, favoriteClick, name, img, id, description, price, category }) => (
  <div
    className='profile'
    style={{ display: 'flex', margin: '30px 100px' }}
  >
    <div
      className='info'
      style={{ flexGrow: '2', padding: '0px 50px' }}
    >
      <div
        className='title'
        style={detailTitleStyle}
      >
        {name}
        {loginStatus && <div className='heart-checkbox' id={id} onClick={favoriteClick} style={{ ...heartCheckboxStyle(checked), minWidth: 40, width: 50, minHeight: 36, height: 45 }} />}
      </div>
      <div className='category'> Category: {category}</div>
      <div className='price'>Price: {`$${price / 100}`}</div>
      <div
        className='description'
        style={{ textIndent: '2em', marginTop: 30, fontSize: '70%' }}
      >
        {description}
      </div>
    </div>
    <div
      className='img-container'
      style={{ flexGrow: '1' }}
    >
      {img && <img
        className='img'
        src={`/${img}`}
        onError={e => { e.target.onerror = null; e.target.src = fallbackImg }}
        alt='img break'
        style={{ width: 400, height: 400 }}
      />}
    </div>
  </div>
);

export default MenuDetail;