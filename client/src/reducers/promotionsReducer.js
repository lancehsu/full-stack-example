import { FETCH_PROMO_PENDING, FETCH_PROMO_SUCCESS, FETCH_PROMO_FAILED, GET_PROMO_NAME, GET_PROMO_ID, GET_PROMO_IMG } from '../actions/promoActions';

export const promoData = (state = null, action) => {
  switch (action.type) {
    case FETCH_PROMO_PENDING:
      return true;
    case FETCH_PROMO_SUCCESS:
      return action.payload;
    case FETCH_PROMO_FAILED:
      return action.payload;
    default:
      return state;
  }
}
export const promoName = (state = [], action) => {
  switch (action.type) {
    case GET_PROMO_NAME:
      return action.payload;
    default:
      return state;
  }
};
export const promoId = (state = [], action) => {
  switch (action.type) {
    case GET_PROMO_ID:
      return action.payload;
    default:
      return state;
  }
};
export const promoImg = (state = [], action) => {
  switch (action.type) {
    case GET_PROMO_IMG:
      return action.payload;
    default:
      return state;
  }
};
