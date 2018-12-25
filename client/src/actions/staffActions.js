import axios from 'axios';

export const FETCH_STAFF_PENDING = 'FETCH_STAFF_PENDING';
export const FETCH_STAFF_SUCCESS = 'FETCH_STAFF_SUCCESS';
export const FETCH_STAFF_FAILED = 'FETCH_STAFF_FAILED';
export const GET_STAFF_NAME = 'GET_STAFF_NAME';
export const GET_STAFF_ID = 'GET_STAFF_ID';
export const GET_STAFF_ABBR = 'GET_STAFF_ABBR';
export const GET_STAFF_IMG = 'GET_STAFF_IMG';

// get promo info
const fetchStaffPending = () => ({
  type: FETCH_STAFF_PENDING
});
const fetchStaffSuccess = data => ({
  type: FETCH_STAFF_SUCCESS,
  payload: data
});
const fetchStaffFailed = err => ({
  type: FETCH_STAFF_FAILED,
  payload: err
});
export const fetchStaff = () => async dispatch => {
  dispatch(fetchStaffPending());
  try {
    const response = await axios.get('/leaders');
    dispatch(fetchStaffSuccess(response));
  } catch (err) {
    dispatch(fetchStaffFailed(err));
  }
};

export const getStaffName = () => (dispatch, getState) => {
  const { data } = getState().staffData;
  dispatch({
    type: GET_STAFF_NAME,
    payload: data.map(e => e.name)
  });
};

export const getStaffId = () => (dispatch, getState) => {
  const { data } = getState().staffData;
  dispatch({
    type: GET_STAFF_ID,
    payload: data.map(e => e._id)
  });
};

export const getStaffImg = () => (dispatch, getState) => {
  const { data } = getState().staffData;
  dispatch({
    type: GET_STAFF_IMG,
    payload: data.map(e => e.image)
  });
};
export const getStaffAbbr = () => (dispatch, getState) => {
  const { data } = getState().staffData;
  dispatch({
    type: GET_STAFF_ABBR,
    payload: data.map(e => e.abbr)
  })
};
