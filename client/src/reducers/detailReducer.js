import {
  FETCH_DETAIL_PENDING, FETCH_DETAIL_SUCCESS, FETCH_DETAIL_FAILED,
  GET_DETAIL_NAME, GET_DETAIL_ID, GET_DETAIL_IMG,
  GET_DETAIL_PRICE, GET_DETAIL_CATEGORY, GET_DETAIL_ABBR,
  GET_DETAIL_DESCRIPTION, GET_DETAIL_DESIGNATION, GET_DETAIL_COMMENTS, DETAIL_UNMOUNT
} from '../actions/detailActions';

export const detailData = (state = null, action) => {
  switch (action.type) {
    case FETCH_DETAIL_PENDING:
      return true;
    case FETCH_DETAIL_SUCCESS:
      return action.payload;
    case FETCH_DETAIL_FAILED:
      return action.payload;
    default:
      return state;
  }
}
export const detailName = (state = null, action) => {
  switch (action.type) {
    case GET_DETAIL_NAME:
      return action.payload;
    case DETAIL_UNMOUNT:
      return null;
    default:
      return state;
  }
};
export const detailId = (state = null, action) => {
  switch (action.type) {
    case GET_DETAIL_ID:
      return action.payload;
    case DETAIL_UNMOUNT:
      return null;
    default:
      return state;
  }
};
export const detailImg = (state = null, action) => {
  switch (action.type) {
    case GET_DETAIL_IMG:
      return action.payload;
    case DETAIL_UNMOUNT:
      return null;
    default:
      return state;
  }
};
export const detailCategory = (state = null, action) => {
  switch (action.type) {
    case GET_DETAIL_CATEGORY:
      return action.payload;
    case DETAIL_UNMOUNT:
      return null;
    default:
      return state;
  }
};
export const detailAbbr = (state = null, action) => {
  switch (action.type) {
    case GET_DETAIL_ABBR:
      return action.payload;
    case DETAIL_UNMOUNT:
      return null;
    default:
      return state;
  }
};
export const detailPrice = (state = null, action) => {
  switch (action.type) {
    case GET_DETAIL_PRICE:
      return action.payload;
    case DETAIL_UNMOUNT:
      return null;
    default:
      return state;
  }
};
export const detailDescription = (state = null, action) => {
  switch (action.type) {
    case GET_DETAIL_DESCRIPTION:
      return action.payload;
    case DETAIL_UNMOUNT:
      return null;
    default:
      return state;
  }
};
export const detailDesignation = (state = null, action) => {
  switch (action.type) {
    case GET_DETAIL_DESIGNATION:
      return action.payload;
    case DETAIL_UNMOUNT:
      return null;
    default:
      return state;
  }
};
export const detailComments = (state = [], action) => {
  switch (action.type) {
    case GET_DETAIL_COMMENTS:
      return action.payload;
    case DETAIL_UNMOUNT:
      return null;
    default:
      return state;
  }
};