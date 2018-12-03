import React from 'react';
import '../css/Detail.css';

const Detail = ({ type, name, designation, img, fallbackImg, description, price, category, comment, rating, authorName, authorId }) => (
      <div className='Detail'>
        <div className='profile'>
          <div className='info'>
            <div className='name'>{name}</div>
            {type === 'staffs' && <div className='designation'>{designation}</div>}
            {type === 'menu' && <div className='category'> Category: {category}</div>}
            {(type === 'menu' || type === 'promotions') && <div className='price'>Price: {`$${price/100}`}</div>}
            <div className='description'>{description}</div>
          </div>
          {/* GET src='(menu || promotions || staffs)/images/...' */}
          <div className='img-container'><img className='img' src={`../${img}`} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} alt='img break' /></div>
        </div>
        {type === 'menu' && (
          <div className='comments-container'>
            {comment.map((e, i) => (
              <div className='comment' key={[i]} author-id={authorId[i]}>
                <div className='rating'>{rating[i]}</div>
                <div className='context'>{e}</div>
                <div className='authorName'>{authorName[i]}</div>
              </div>
            ))}
          </div>
        )}
      </div>
);

export default Detail;