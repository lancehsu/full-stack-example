import axios from 'axios';

export const FETCH_MENU_PENDING = 'FETCH_MENU_PENDING';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILED = 'FETCH_MENU_FAILED';
// export const GET_MENU_MEAN_RATING = 'GET_MENU_MEAN_RATING';
export const GET_MENU_NAME = 'GET_MENU_NAME';
export const GET_MENU_ID = 'GET_MENU_ID';
export const GET_MENU_IMG = 'GET_MENU_IMG';
export const GET_MENU_CATEGORY = 'GET_MENU_CATEGORY';
export const GET_MENU_AMOUNT = 'GET_MENU_AMOUNT';
export const ADD_OPTIONS = 'ADD_OPTIONS';
export const SELECT_ON_CHANGE = 'SELECT_ON_CHANGE';

//get menu info
const fetchMenuPending = () => ({
  type: FETCH_MENU_PENDING
});
const fetchMenuSuccess = data => ({
  type: FETCH_MENU_SUCCESS,
  payload: data
});
const fetchMenuFailed = err => ({
  type: FETCH_MENU_FAILED,
  payload: err
});
export const fetchMenu = () => async dispatch => {
  dispatch(fetchMenuPending());
  try {
    const response = await axios.get('/dishes');
    dispatch(fetchMenuSuccess(response));
  } catch (err) {
    dispatch(fetchMenuFailed(err));
  }
};
// export const getMenuMeanRating = () => (dispatch, getState) => {
//   const { data } = getState().menuData;
//   const menuMeanRating = data.map(e => Math.round(e.comments.reduce((a, b) => a + b.rating, 0)* 10/ e.comments.length)/10);
//   console.log(menuMeanRating);
//   dispatch({
//     type: GET_MENU_MEAN_RATING,
//     payload: 1
//   })
// };

export const getMenuName = () => (dispatch, getState) => {
  const { data } = getState().menuData;
  dispatch({
    type: GET_MENU_NAME,
    payload: data.map(e => e.name)
  });
};

export const getMenuId = () => (dispatch, getState) => {
  const { data } = getState().menuData;
  dispatch({
    type: GET_MENU_ID,
    payload: data.map(e => e._id)
  });
};

export const getMenuImg = () => (dispatch, getState) => {
  const { data } = getState().menuData;
  dispatch({
    type: GET_MENU_IMG,
    payload: data.map(e => e.image)
  });
};

export const getMenuCategory = () => (dispatch, getState) => {
  const { data } = getState().menuData;
  dispatch({
    type: GET_MENU_CATEGORY,
    payload: data.map(e => e.category)
  });
};
export const getMenuAmount = () => (dispatch, getState) => {
  const { data } = getState().menuData;
  dispatch({
    type: GET_MENU_AMOUNT,
    payload: data.length
  });
};

// select list operation
export const addOptions = options => ({
  type: ADD_OPTIONS,
  payload: options
});
export const selectOnChange = selectedOption => ({
  type: SELECT_ON_CHANGE,
  payload: selectedOption
});
