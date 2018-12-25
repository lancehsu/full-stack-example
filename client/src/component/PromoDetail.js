import React from 'react';
import { detailStyle, detailTitleStyle } from '../style/Style';

const fallbackImg = '/images/promotions-icon.jpg';

const Detail = ({ name, img, description, price }) => (
  <div className='PromoDetail' style={detailStyle}>
    <div
      className='profile'
      style={{ display: 'flex', margin: '30px 60px' }}
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
        </div>
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
          style={{ width: 600, height: 400 }}
        />}
      </div>
    </div>
  </div>
);

export default Detail;