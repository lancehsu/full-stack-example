import React from 'react';
import { detailStyle, detailTitleStyle } from '../style/Style';

const fallbackImg = '/images/empty-staff.jpg';

const StaffDetail = ({ name, designation, img, description }) => (
  <div className='StaffDetail' style={detailStyle}>
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
        </div>
        <div className='designation'>{designation}</div>
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
  </div>
);

export default StaffDetail;