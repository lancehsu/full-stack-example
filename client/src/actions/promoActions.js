import axios from 'axios';

export const FETCH_PROMO_PENDING = 'FETCH_PROMO_PENDING';
export const FETCH_PROMO_SUCCESS = 'FETCH_PROMO_SUCCESS';
export const FETCH_PROMO_FAILED = 'FETCH_PROMO_FAILED';
export const GET_PROMO_NAME = 'GET_PROMO_NAME';
export const GET_PROMO_ID = 'GET_PROMO_ID';
export const GET_PROMO_IMG = 'GET_PROMO_IMG';

// get promo info
const fetchPromoPending = () => ({
  type: FETCH_PROMO_PENDING
});
const fetchPromoSuccess = data => ({
  type: FETCH_PROMO_SUCCESS,
  payload: data
});
const fetchPromoFailed = err => ({
  type: FETCH_PROMO_FAILED,
  payload: err
});
export const fetchPromo = () => async dispatch => {
  dispatch(fetchPromoPending());
  try {
    const response = await axios.get('/promotions');
    dispatch(fetchPromoSuccess(response));
  } catch (err) {
    dispatch(fetchPromoFailed(err));
  }
};

export const getPromoName = () => (dispatch, getState) => {
  const { data } = getState().promoData;
  dispatch({
    type: GET_PROMO_NAME,
    payload: data.map(e => e.name)
  });
};

export const getPromoId = () => (dispatch, getState) => {
  const { data } = getState().promoData;
  dispatch({
    type: GET_PROMO_ID,
    payload: data.map(e => e._id)
  });
};

export const getPromoImg = () => (dispatch, getState) => {
  const { data } = getState().promoData;
  dispatch({
    type: GET_PROMO_IMG,
    payload: data.map(e => e.image)
  });
};
