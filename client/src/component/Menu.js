import React from 'react';
import { Link } from 'react-router-dom';
import Radium from 'radium';
import Select from 'react-select';
import { pageStyle, pageItemImgStyle, pageContainerStyle, pageItemStyle, pageItemNameStyle, heartCheckboxStyle, selectStyle } from '../style/Style';

const fallbackImg = '/images/empty-dish.jpg';

const Menu = ({ ids, names, options, selectedOption, handleChange, imgs, loginStatus, favoriteList, checked, favoriteClick }) => {
  return (
    <div className='Menu' style={pageStyle}>

      <h1 style={{ marginBottom: 0 }}>Menu</h1>
      <Select
        options={options}
        onChange={handleChange}
        value={selectedOption}
        styles={selectStyle}
      />
      <div className='container' style={pageContainerStyle}>
        {selectedOption && selectedOption.value.map(i => (
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
              {loginStatus && <div className='heart-checkbox' id={ids[i]} onClick={favoriteClick} style={{ ...heartCheckboxStyle(checked[i]), width: 20, height: 18, marginRight: 15 }} />}
              {names[i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Radium(Menu);