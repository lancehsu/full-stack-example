import { ADD_OPTIONS, SELECT_ON_CHANGE } from '../actions';
export const options = (state = [], action) => {
  return action.type === ADD_OPTIONS ? action.payload : state;
};
export const selectedOption = (state = null, action) => {
  return action.type === SELECT_ON_CHANGE ? action.payload : state;
};