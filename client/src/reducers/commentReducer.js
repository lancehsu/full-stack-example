import { GET_COMMENTS_CONTEXT, GET_COMMENTS_ID, GET_COMMENTS_RATING, GET_COMMENTS_AUTHOR, GET_COMMENTS_AUTHOR_ID, GET_COMMENTS_AUTHOR_NAME, TO_ADD_NEW_COMMENT, ADD_RATING, ADD_CONTEXT, CANCEL_COMMENT, TO_EDIT_COMMENT } from '../actions/commentActions';
import { DETAIL_UNMOUNT } from '../actions/detailActions';
import { LOG_OUT } from '../actions/loginActions';

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
export const modifyCommentMode = (state = 0, action) => {
  // addCommentMode: 1, editCommentMode: -1, normal: 0
  switch (action.type) {
    case TO_ADD_NEW_COMMENT:
      return 1;
    case DETAIL_UNMOUNT:
      return 0;
    case CANCEL_COMMENT:
      return 0;
    case LOG_OUT:
      return 0;
    case TO_EDIT_COMMENT:
      return -1;
    default:
      return state;
  }
};
export const ratingToAdd = (state = 0, action) => {
  switch (action.type) {
    case ADD_RATING:
      return action.payload;
    case CANCEL_COMMENT:
      return 0;
    case DETAIL_UNMOUNT:
      return 0;
    case LOG_OUT:
      return 0;
    default:
      return state;
  }
};

export const contextToAdd = (state = '', action) => {
  switch (action.type) {
    case ADD_CONTEXT:
      return action.payload;
    case CANCEL_COMMENT:
      return '';
    case DETAIL_UNMOUNT:
      return '';
    case LOG_OUT:
      return '';
    default:
      return state;
  }
};

export const editedIdx = (state = null, action) => {
  switch (action.type) {
    case TO_EDIT_COMMENT:
      return action.payload;
    case CANCEL_COMMENT:
      return null;
    case TO_ADD_NEW_COMMENT:
      return null;
    case DETAIL_UNMOUNT:
      return null;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
}