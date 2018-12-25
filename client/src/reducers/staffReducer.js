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
  return action.type === GET_STAFF_NAME ? action.payload : state
};
export const staffId = (state = [], action) => (
  action.type === GET_STAFF_ID ? action.payload : state
);
export const staffImg = (state = [], action) => (
  action.type === GET_STAFF_IMG ? action.payload : state
)
export const staffAbbr = (state = [], action) => (
  action.type === GET_STAFF_ABBR ? action.payload : state
);
