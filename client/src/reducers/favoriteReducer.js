import { FETCH_FAVORITE_PENDING, FETCH_FAVORITE_SUCCESS, FETCH_FAVORITE_FAILED, GET_FAVORITE_ID, GET_FAVORITE_NAME, GET_FAVORITE_IMG, GET_FAVORITE_CATEGORY, GET_FAVORITE_AMOUNT, ADD_FAVORITE, REMOVE_FAVORITE, BUILD_FAVORITELIST } from '../actions/favoriteActions';
import { LOG_OUT } from '../actions/loginActions';

export const favoriteData = (state = null, action) => {
  switch (action.type) {
    case FETCH_FAVORITE_PENDING:
      return true;
    case FETCH_FAVORITE_SUCCESS:
      return action.payload;
    case FETCH_FAVORITE_FAILED:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
}
export const favoriteName = (state = [], action) => {
  switch (action.type) {
    case GET_FAVORITE_NAME:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
};
export const favoriteId = (state = [], action) => {
  switch (action.type) {
    case GET_FAVORITE_ID:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
};
export const favoriteImg = (state = [], action) => {
  switch (action.type) {
    case GET_FAVORITE_IMG:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
};
export const favoriteCategory = (state = [], action) => {
  switch (action.type) {
    case GET_FAVORITE_CATEGORY:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
};
export const favoriteAmount = (state = 0, action) => {
  switch (action.type) {
    case GET_FAVORITE_AMOUNT:
      return action.payload;
    case LOG_OUT:
      return 0;
    default:
      return state;
  }
};

export const favoriteList = (state = [], action) => {
  switch (action.type) {
    case BUILD_FAVORITELIST:
      return action.payload;
    case ADD_FAVORITE:
      return state.map(e => ({ id: e.id, liked: e.id === action.payload ? true : e.liked }));
    case REMOVE_FAVORITE:
      return state.map(e => ({ id: e.id, liked: e.id === action.payload ? false : e.liked }));
    case LOG_OUT:
      return [];
    default:
      return state;
  }
};