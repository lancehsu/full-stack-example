import { GET_COMMENTS_CONTEXT, GET_COMMENTS_ID, GET_COMMENTS_RATING, GET_COMMENTS_AUTHOR, GET_COMMENTS_AUTHOR_ID, GET_COMMENTS_AUTHOR_NAME, ADD_NEW_COMMENT, ADD_RATING } from '../actions/commentActions';
import { DETAIL_UNMOUNT } from '../actions/detailActions';

export const commentsContext = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_CONTEXT:
      return action.payload;
    case DETAIL_UNMOUNT:
      return [];
    default:
      return state;
  }
};
export const commentsId = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_ID:
      return action.payload;
    case DETAIL_UNMOUNT:
      return [];
    default:
      return state;
  }
};
export const commentsRating = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_RATING:
      return action.payload;
    case DETAIL_UNMOUNT:
      return [];
    default:
      return state;
  }
};
export const commentsAuthor = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_AUTHOR:
      return action.payload;
    case DETAIL_UNMOUNT:
      return [];
    default:
      return state;
  }
};
export const commentsAuthorId = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_AUTHOR_ID:
      return action.payload;
    case DETAIL_UNMOUNT:
      return [];
    default:
      return state;
  }
};
export const commentsAuthorName = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS_AUTHOR_NAME:
      return action.payload;
    case DETAIL_UNMOUNT:
      return [];
    default:
      return state;
  }
};
export const addCommentMode = (state = false, action) => {
  switch (action.type) {
    case ADD_NEW_COMMENT:
      return true;
    case DETAIL_UNMOUNT:
      return false;
    default:
      return state;
  }
};
export const ratingToAdd = (state = 0, action) => {
  switch (action.type) {
    case ADD_RATING:
      return action.payload;
    case DETAIL_UNMOUNT:
      return 0;
    default:
      return state;
  }
};