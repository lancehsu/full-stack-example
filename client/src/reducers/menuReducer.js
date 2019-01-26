import {
  FETCH_MENU_PENDING, FETCH_MENU_SUCCESS, FETCH_MENU_FAILED,
  GET_MENU_NAME, GET_MENU_ID, GET_MENU_IMG, GET_MENU_CATEGORY,
  GET_MENU_AMOUNT, ADD_OPTIONS, SELECT_ON_CHANGE
} from '../actions/menuActions';

export const menuData = (state = null, action) => {
  switch (action.type) {
    case FETCH_MENU_PENDING:
      return true;
    case FETCH_MENU_SUCCESS:
      return action.payload;
    case FETCH_MENU_FAILED:
      return action.payload;
    default:
      return state;
  }
};
export const menuName = (state = [], action) => {
  switch (action.type) {
    case GET_MENU_NAME:
      return action.payload;
    default:
      return state;
  }
};
export const menuId = (state = [], action) => {
  switch (action.type) {
    case GET_MENU_ID:
      return action.payload;
    default:
      return state;
  }
};
export const menuImg = (state = [], action) => {
  switch (action.type) {
    case GET_MENU_IMG:
      return action.payload;
    default:
      return state;
  }
};
export const menuCategory = (state = null, action) => {
  switch (action.type) {
    case GET_MENU_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};
export const menuAmount = (state = 0, action) => {
  switch (action.type) {
    case GET_MENU_AMOUNT:
    return action.payload;
    default:
    return state;
  }
};
export const options = (state = [], action) => {
  switch (action.type) {
    case ADD_OPTIONS:
    return action.payload;
    default:
    return state;
  }
};
export const selectedOption = (state = null, action) => {
  switch (action.type) {
    case SELECT_ON_CHANGE:
    return action.payload;
    default:
    return state;
  }
};