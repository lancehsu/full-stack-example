import React from 'react';
import Radium from 'radium';
import ReactStars from 'react-stars';
import { color, pointer, commentStyle, commentButtonStyle } from '../style/Style';

const Comments = ({ myId, comments, commentsId, ratings, authorIds, authorNames, toAddNewComment, toEditComment, modifyCommentMode, cancelComment, addRating, ratingToAdd, addContext, contextToAdd, addComment, editComment, editedIdx, deleteComment }) => (
  <div className='comments-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {comments.length > 0 &&
      <div style={{ maxHeight: '348px', overflow: 'auto', whiteSpace: 'nowrap' }}>
        {comments.map((e, i) => (
          modifyCommentMode === -1 && comments.length - 1 - i === editedIdx ? (
            <AddComment
              ratingToAdd={ratingToAdd}
              addRating={addRating}
              contextToAdd={contextToAdd}
              addContext={addContext}
              modifyComment={editComment}
              cancelComment={cancelComment}
              key={comments.length - 1 - i}
            />
          ) : (
              <div className='comment' id={commentsId[comments.length - 1 - i]} style={commentStyle} key={comments.length - 1 - i}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <ReactStars
                    value={ratings[comments.length - 1 - i]}
                    count={5}
                    edit={false}
                    color2={color.homeBackgroundColor}
                    className='rating'
                  />
                  {(authorIds[comments.length - 1 - i] === myId) && (
                    <div style={{ display: 'flex' }}>
                      <div onClick={toEditComment} style={{ ...commentButtonStyle, marginRight: 6 }}>Edit</div>
                      <div onClick={deleteComment} style={commentButtonStyle}>Delete</div>
                    </div>
                  )}
                </div>
                <div className='context' style={{ fontSize: '60%' }}>{comments[comments.length - 1 - i]}</div>
                <div className='authorName' style={{ fontSize: '65%', alignSelf: 'flex-end' }}>{authorNames[comments.length - 1 - i] !== ' ' ? authorNames[comments.length - 1 - i] : 'guest'}</div>
              </div>
            )))}
      </div>
    }
    {modifyCommentMode === 1 ? (
      <AddComment
        ratingToAdd={ratingToAdd}
        addRating={addRating}
        contextToAdd={contextToAdd}
        addContext={addContext}
        modifyComment={addComment}
        cancelComment={cancelComment}
      />
    ) : (
        <div style={{ cursor: pointer.cursor, fontSize: '80%',':hover': { color: color.hoverColor } }} onClick={toAddNewComment}>
          Add a new comment
    </div>
      )}
  </div>
);

const AddComment = ({ ratingToAdd, addRating, contextToAdd, addContext, modifyComment, cancelComment }) => (
  <div style={commentStyle}>
    <ReactStars
      value={ratingToAdd}
      count={5}
      edit={true}
      onChange={addRating}
      color2={color.homeBackgroundColor}
      className='rating'
    />
    <textarea rows='2' style={{ fontSize: 14 }} value={contextToAdd} onChange={addContext} />
    <div style={{ display: 'flex', alignSelf: 'flex-end' }}>
      <div onClick={modifyComment} style={{ ...commentButtonStyle, marginRight: 6 }}>Confirm</div>
      <div onClick={cancelComment} style={commentButtonStyle}>Cancel</div>
    </div>
  </div>
);

export default Radium(Comments);