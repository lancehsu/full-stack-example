export const HOME_TO_SCROLL = 'HOME_TO_SCROLL';
export const NOW_SCROLL = 'NOW_SCROLL';
export const SCROLL_TO_RIGHT = 'SCROLL_TO_RIGHT';
export const SCROLL_TO_LEFT = 'SCROLL_TO_LEFT';

//scroll dispaly on home page
export const homeScrolling = homeScrollTo => {
  return {
    type: HOME_TO_SCROLL,
    payload: homeScrollTo
  }
};
export const nowScroll = () => (dispatch, getState) => {
  const { homeScrollTo } = getState();
  homeScrollTo === 'aboutus' &&
    window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
  homeScrollTo === 'logo' && window.scrollTo(0, 0);
  dispatch({ type: NOW_SCROLL });
}
//menu plate scrolling
export const scrollToRight = amount => ({
  type: SCROLL_TO_RIGHT,
  payload: amount
});
export const scrollToLeft = amount => ({
  type: SCROLL_TO_LEFT,
  payload: amount
});