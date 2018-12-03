import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Pages.css';

const Staffs = ({ id, names, abbr, imgs, fallbackImg }) => (
  <div className='Staffs'>
    <div className='title'>
      <h1>Staffs</h1>
    </div>
    <div className='container'>
      {names.map((name, i) => {
        return (
          <div className='item' key={id[i]}>
            <div className='item-img-container'>
              <Link to={`/staffs/${id[i]}`}>
                <img className='item-img' src={imgs[i]} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} alt='img break' />
              </Link>
            </div>
            <div className='item-name'>
              <div>{name}</div>
              <div>{abbr[i]}</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Staffs;