import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Pages.css';

  const Menu = ({ id, names, select, filterIdx, imgs, fallbackImg, filtering }) => (
    <div className='Menu'>
      <div className='title'>
        <h1>Menu</h1>
        <select id='select' onChange={filtering}>
          {select.map((e, i) => <option value={e} key={i}>{e}</option>)}
        </select>
      </div>
      <div className='container'>
        {filterIdx.map((i) => (
          <div className='item' key={id[i]}>
            <div className='item-img-container'>
              <Link to={`/menu/${id[i]}`}>
                <img className='item-img' src={imgs[i]} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} alt='img break' />
              </Link>
            </div>
            <div className='item-name'>{names[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );

 export default Menu;