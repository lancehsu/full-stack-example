import { FETCH_STAFF_PENDING, FETCH_STAFF_SUCCESS, FETCH_STAFF_FAILED, GET_STAFF_NAME, GET_STAFF_ID, GET_STAFF_IMG, GET_STAFF_ABBR } from '../actions/staffActions';

export const staffData = (state = null, action) => {
  switch (action.type) {
    case FETCH_STAFF_PENDING:
      return true;
    case FETCH_STAFF_SUCCESS:
      return action.payload;
    case FETCH_STAFF_FAILED:
      return action.payload;
    default:
      return state;
  }
}
export const staffName = (state = [], action) => {
  switch (action.type) {
    case GET_STAFF_NAME:
      return action.payload;
    default:
      return state;
  }
};
export const staffId = (state = [], action) => {
  switch (action.type) {
    case GET_STAFF_ID:
      return action.payload;
    default:
      return state;
  }
};
export const staffImg = (state = [], action) => {
  switch (action.type) {
    case GET_STAFF_IMG:
      return action.payload;
    default:
      return state;
  }
}
export const staffAbbr = (state = [], action) => {
  switch (action.type) {
    case GET_STAFF_ABBR:
      return action.payload;
    default:
      return state;
  }
};
