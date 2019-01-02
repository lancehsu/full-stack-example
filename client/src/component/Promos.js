import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import { pageStyle, pageItemImgStyle, pageContainerStyle, pageItemStyle, pageItemNameStyle } from '../style/Style';

const fallbackImg = '/images/promotions-icon.jpg';
const { width, ...pageItemImgStyleRest } = pageItemImgStyle;

const Promos = ({ ids, names, imgs }) => (
  <div className='Promotions' style={pageStyle}>
    <div className='title'>
      <h1>Promotions</h1>
    </div>
    <div className='container' style={pageContainerStyle}>
      {names && names.map((name, i) => (
        <div className='item' key={i} style={pageItemStyle}>
          <div className='item-img-container'>
            <Link to={`/promos/${ids[i]}`}>
              <img
                className='item-img'
                src={imgs[i]}
                onError={e => { e.target.onerror = null; e.target.src = fallbackImg }}
                alt='img break'
                key={i}
                style={{ ...pageItemImgStyleRest, width: 300 }}
              />
            </Link>
          </div>
          <div className='item-name' style={pageItemNameStyle}>{name}</div>
        </div>
      )
      )
      }
    </div>
  </div>
);

export default Radium(Promos);