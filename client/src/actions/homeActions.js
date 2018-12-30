export const HOME_SCROLLING = 'HOMESCROLLING';
export const SCROLL_TO_RIGHT = 'SCROLL_TO_RIGHT';
export const SCROLL_TO_LEFT = 'SCROLL_TO_LEFT';

//scroll dispaly on home page
export const homeScrolling = homeScrollTo => {
  return {
  type: HOME_SCROLLING,
  payload: homeScrollTo
}};
//menu plate scrolling
export const scrollToRight = amount => ({
  type: SCROLL_TO_RIGHT,
  payload: amount
});
export const scrollToLeft = amount => ({
  type: SCROLL_TO_LEFT,
  payload: amount
});