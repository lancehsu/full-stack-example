import {
  FETCH_MENU_PENDING, FETCH_MENU_SUCCESS, FETCH_MENU_FAILED,
  GET_MENU_NAME, GET_MENU_ID, GET_MENU_IMG, GET_MENU_CATEGORY,
  GET_MENU_AMOUNT
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
}
export const menuName = (state = [], action) => {
  return action.type === GET_MENU_NAME ? action.payload : state;
};
export const menuId = (state = [], action) => {
  switch(action.type) {
    case GET_MENU_ID:
      return action.payload;
      default:
      return state;
  }
};
export const menuImg = (state = [], action) => (
  action.type === GET_MENU_IMG ? action.payload : state
);
export const menuCategory = (state = null, action) => (
  action.type === GET_MENU_CATEGORY ? action.payload : state
);
export const menuAmount = (state = 0, action) => (
  action.type === GET_MENU_AMOUNT ? action.payload : state
);
