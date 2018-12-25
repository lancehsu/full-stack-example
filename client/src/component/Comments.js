import React from 'react';
import StarRatings from 'react-star-ratings';
import { color, pointer } from '../style/Style';

const Comments = ({ comments, commentsId, ratings, authorIds, authorNames, addNewComment, addCommentMode, addRating, ratingToAdd }) => (
  <div className='comments-container'>
    {comments.map((e, i) => (
      <div className='comment' key={i} id={commentsId} author-id={authorIds[i]}>
        <StarRatings
          rating={ratings[i]}
          starRatedColor={color.homeBackgroundColor}
          name='rating'
        />
        <div className='context'>{e}</div>
        <div className='authorName'>{authorNames[i]}</div>
      </div>
    ))}
    {addCommentMode? (
      <StarRatings
      rating={ratingToAdd}
      changeRating={addRating}
      starRatedColor={color.homeBackgroundColor}
      name='rating'
      />
    ): <div style={{cursor: pointer.cursor}} onClick={addNewComment}>Add a new comment</div>}
  </div>
);

export default Comments;