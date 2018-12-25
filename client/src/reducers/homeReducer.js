import { SCROLL_TO_LEFT, SCROLL_TO_RIGHT } from '../actions';

export const scrollView = (state = [0, 1], action) => {
  switch (action.type) {
    case SCROLL_TO_LEFT:
      return state.map(e => (e === action.payload - 1) ? 0 : e + 1);
    case SCROLL_TO_RIGHT:
      return state.map(e => (e === 0) ? action.payload - 1 : e - 1);
    default:
      return [0, 1];
  }
}
