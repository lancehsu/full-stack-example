import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import { pageStyle, pageItemImgStyle, pageContainerStyle, pageItemStyle, pageItemNameStyle } from '../style/Style';

const fallbackImg = '/images/empty-staff.jpg';

const Staffs = ({ ids, names, abbrs, imgs }) => (
  <div className='Staffs' style={pageStyle}>
    <div className='title'>
      <h1>Staffs</h1>
    </div>
    <div className='container' style={pageContainerStyle}>
      {names && names.map((name, i) => (
        <div className='item' key={i} style={pageItemStyle}>
          <div className='item-img-container'>
            <Link to={`/staffs/${ids[i]}`}>
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
          <div className='item-name' style={pageItemNameStyle}>
            <div>{name}</div>
            <div>{abbrs[i]}</div>
          </div>
        </div>
      )
      )}
    </div>
  </div>
);

export default Radium(Staffs);