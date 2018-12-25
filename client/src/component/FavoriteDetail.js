// import React from 'react';
// import { detailStyle, detailTitleStyle, heartCheckboxStyle } from '../style/Style';

// const fallbackImg = '/images/empty-dish.jpg';

// const FavoriteDetail = ({ name, img, description, price, category, comment, rating, authorName, authorId, checked, favoriteClick }) => (
//   <div className='FavoriteDetail' style={detailStyle}>
//     <div
//       className='profile'
//       style={{ display: 'flex', margin: '30px 100px' }}
//     >
//       <div
//         className='info'
//         style={{ flexGrow: '2', padding: '0px 50px' }}
//       >
//         <div
//           className='title'
//           style={detailTitleStyle}
//         >
//           {name}
//           <div className='heart-checkbox' onClick={favoriteClick} style={{ ...heartCheckboxStyle(checked), width: 50, height: 45 }} />
//         </div>
//         <div className='category'> Category: {category}</div>
//         <div className='price'>Price: {`$${price / 100}`}</div>
//         <div
//           className='description'
//           style={{ textIndent: '2em', marginTop: 30, fontSize: '70%' }}
//         >
//           {description}
//         </div>
//       </div>
//       <div
//         className='img-container'
//         style={{ flexGrow: '1' }}
//       >
//         {img && <img
//           className='img'
//           src={`/${img}`}
//           onError={e => { e.target.onerror = null; e.target.src = fallbackImg }}
//           alt='img break'
//           style={{ width: 400, height: 400 }}
//         />}
//       </div>
//     </div>
//     <div className='comments-container'>
//       {comment.map((e, i) => (
//         <div className='comment' key={i} author-id={authorId[i]}>
//           <div className='rating'>{rating[i]}</div>
//           <div className='context'>{e}</div>
//           <div className='authorName'>{authorName[i]}</div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default FavoriteDetail;