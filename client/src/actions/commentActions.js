export const GET_COMMENTS_CONTEXT = 'GET_COMMENTS_CONTEXT';
export const GET_COMMENTS_ID = 'GET_COMMENTS_ID';
export const GET_COMMENTS_RATING = 'GET_COMMENTS_RATING';
export const GET_COMMENTS_AUTHOR = 'GET_COMMENTS_AUTHOR';
export const GET_COMMENTS_AUTHOR_ID = 'GET_COMMENTS_AUTHOR_ID';
export const GET_COMMENTS_AUTHOR_NAME = 'GET_COMMENTS_AUTHOR_NAME';
export const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
export const ADD_RATING ='ADD_RATING';

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
export const addNewComment = () => (dispatch, getState) => {
  const { loginStatus } = getState();
  loginStatus ? dispatch({ type: ADD_NEW_COMMENT }) : alert('Please login!');
};

export const addRating = () => ({
    type: ADD_RATING
});

export const addComment = () => (dispatch, getState) => {

};
