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
  return action.type === GET_PROMO_NAME ? action.payload : state
};
export const promoId = (state = [], action) => (
  action.type === GET_PROMO_ID ? action.payload : state
);
export const promoImg = (state = [], action) => (
  action.type === GET_PROMO_IMG ? action.payload : state
)
