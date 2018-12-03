import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Pages.css';

const Promotions = ({ id, names, imgs, fallbackImg }) => (
  <div className='Promotions'>
    <div className='title'>
      <h1>Promotions</h1>
    </div>
    <div className='container'>
      {names.map((name, i) => {
        return (
          <div className='item' key={id[i]}>
            <div className='item-img-container'>
              <Link to={`/promotions/${id[i]}`}>
                <img className='item-img' src={imgs[i]} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} alt='img break' />
              </Link>
            </div>
            <div className='item-name'>{name}</div>
          </div>
        );
      })
      }
    </div>
  </div>
);

export default Promotions;