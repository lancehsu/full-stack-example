export const ADD_OPTIONS = 'ADD_OPTIONS';
export const SELECT_ON_CHANGE = 'SELECT_ON_CHANGE';

export const SCROLL_TO_RIGHT = 'SCROLL_TO_RIGHT';
export const SCROLL_TO_LEFT = 'SCROLL_TO_LEFT';

// select list operation
export const addOptions = options => ({
  type: ADD_OPTIONS,
  payload: options
});
export const selectOnChange = selectedOption => ({
  type: SELECT_ON_CHANGE,
  payload: selectedOption
});
//scroll dispaly on home page
export const scrollToRight = amount => ({
  type: SCROLL_TO_RIGHT,
  payload: amount
});
export const scrollToLeft = amount => ({
  type: SCROLL_TO_LEFT,
  payload: amount
});