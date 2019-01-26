import axios from 'axios';
import { getDetailComments } from './detailActions';

export const GET_COMMENTS_CONTEXT = 'GET_COMMENTS_CONTEXT';
export const GET_COMMENTS_ID = 'GET_COMMENTS_ID';
export const GET_COMMENTS_RATING = 'GET_COMMENTS_RATING';
export const GET_COMMENTS_AUTHOR = 'GET_COMMENTS_AUTHOR';
export const GET_COMMENTS_AUTHOR_ID = 'GET_COMMENTS_AUTHOR_ID';
export const GET_COMMENTS_AUTHOR_NAME = 'GET_COMMENTS_AUTHOR_NAME';
export const TO_ADD_NEW_COMMENT = 'TO_ADD_NEW_COMMENT';
export const ADD_RATING = 'ADD_RATING';
export const ADD_CONTEXT = 'ADD_CONTEXT';
export const CANCEL_COMMENT = 'CANCEL_COMMENT';
export const TO_EDIT_COMMENT = 'TO_EDIT_COMMENT';

export const getCommentsContext = () => (dispatch, getState) => {
  const comments = getState().detailComments;
  dispatch({
    type: GET_COMMENTS_CONTEXT,
    payload: comments.map(e => e.comment)
  })
};
export const getCommentsId = () => (dispatch, getState) => {
  const comments = getState().detailComments;
  dispatch({
    type: GET_COMMENTS_ID,
    payload: comments.map(e => e._id)
  })
};
export const getCommentsRating = () => (dispatch, getState) => {
  const comments = getState().detailComments;
  dispatch({
    type: GET_COMMENTS_RATING,
    payload: comments.map(e => e.rating)
  })
};
export const getCommentsAuthor = () => (dispatch, getState) => {
  const comments = getState().detailComments;
  dispatch({
    type: GET_COMMENTS_AUTHOR,
    payload: comments.map(e => e.author)
  })
};
export const getCommentsAuthorId = () => (dispatch, getState) => {
  const authors = getState().commentsAuthor;
  dispatch({
    type: GET_COMMENTS_AUTHOR_ID,
    payload: authors.map(e => e._id)
  })
};
export const getCommentsAuthorName = () => (dispatch, getState) => {
  const authors = getState().commentsAuthor;
  dispatch({
    type: GET_COMMENTS_AUTHOR_NAME,
    payload: authors.map(e => `${e.firstname} ${e.lastname}`)
  })
};

export const toAddNewComment = () => (dispatch, getState) => {
  const { loginStatus } = getState();
  loginStatus ? dispatch({ type: TO_ADD_NEW_COMMENT, payload: '' }) : alert('Please login!');
};
export const toEditComment = commentId => (dispatch, getState) => {
  // change ratingToAdd & contextToAdd
  const { commentsId, commentsContext, commentsRating } = getState();
  const idx = commentsId.indexOf(commentId);
  dispatch(addRating(commentsRating[idx]));
  dispatch(addContext(commentsContext[idx]));
  dispatch({ type: TO_EDIT_COMMENT, payload: idx });
};
export const addRating = rating => ({
  type: ADD_RATING,
  payload: rating
});

export const addContext = text => ({
  type: ADD_CONTEXT,
  payload: text
});

export const cancelComment = () => ({
  type: CANCEL_COMMENT
});
export const saveComment = commentsAfterModified => dispatch => {
  dispatch(getDetailComments(commentsAfterModified));
  dispatch(getCommentsContext());
  dispatch(getCommentsId());
  dispatch(getCommentsAuthor());
  dispatch(getCommentsAuthorId());
  dispatch(getCommentsAuthorName());
  dispatch(getCommentsRating());
  dispatch(cancelComment());
};

export const modifyComment = commentId => async (dispatch, getState) => {
  const { token, detailId, modifyCommentMode } = getState();
  let response;

  if (modifyCommentMode === 0 && commentId) {
    // delete mode
    response = await axios.delete(`/dishes/${detailId}/comments/${commentId}`, {
      headers: { 'Authorization': `bearer ${token}` }
    });
  } else if (modifyCommentMode === 1 && !commentId) {
    // add mode
    const { ratingToAdd, contextToAdd } = getState();
    response = await axios.post(`/dishes/${detailId}/comments`, JSON.stringify({ rating: ratingToAdd, comment: contextToAdd }), {
      headers: { 'Authorization': `bearer ${token}`, 'Content-Type': 'application/json' }
    });
  } else if (modifyCommentMode === -1 && !commentId) {
    // edit mode
    const { ratingToAdd, contextToAdd, commentsId, editedIdx } = getState();
    const commentId = commentsId[editedIdx];
    response = await axios.put(`/dishes/${detailId}/comments/${commentId}`, JSON.stringify({ rating: ratingToAdd, comment: contextToAdd }), {
      headers: { 'Authorization': `bearer ${token}`, 'Content-Type': 'application/json' }
    });
  }
  dispatch(saveComment(response.data.comments));
};
