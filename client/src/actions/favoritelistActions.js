import axios from 'axios';
import { fetchMenu, getMenuId } from './menuActions';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FETCH_FAVORITE_PENDING = 'FETCH_FAVORITE_PENDING';
export const FETCH_FAVORITE_SUCCESS = 'FETCH_FAVORITE_SUCCESS';
export const FETCH_FAVORITE_FAILED = 'FETCH_FAVORITE_FAILED';
export const GET_FAVORITE_NAME = 'GET_FAVORITE_NAME';
export const GET_FAVORITE_ID = 'GET_FAVORITE_ID';
export const GET_FAVORITE_IMG = 'GET_FAVORITE_IMG';
export const GET_FAVORITE_CATEGORY = 'GET_FAVORITE_CATEGORY';
export const GET_FAVORITE_AMOUNT = 'GET_FAVORITE_AMOUNT';
export const BUILD_FAVORITELIST = 'BUILD_FAVORTIELIST';

const fetchFavoritePending = () => ({
  type: FETCH_FAVORITE_PENDING
});
const fetchFavoriteSuccess = response => ({
  type: FETCH_FAVORITE_SUCCESS,
  payload: response
});
const fetchFavoriteFailed = err => ({
  type: FETCH_FAVORITE_FAILED,
  payload: err
});
export const fetchFavorite = () => async (dispatch, getState) => {
  dispatch(fetchFavoritePending());
  try {
    const { token } = getState();
    const response = await axios.get('/favorites', {
      headers: { 'Authorization': `bearer ${token}` }
    });
    dispatch(fetchFavoriteSuccess(response));
  } catch (err) {
    dispatch(fetchFavoriteFailed(err));
  }
};
export const getFavoriteName = () => (dispatch, getState) => {
  const { data } = getState().favoriteData;
  let dishes = [];
  if (data) { dishes = data.dishes; };
  dispatch({
    type: GET_FAVORITE_NAME,
    payload: dishes.map(e => e.name)
  });
};

export const getFavoriteId = () => (dispatch, getState) => {
  const { data } = getState().favoriteData;
  let dishes = [];
  if (data) { dishes = data.dishes; };
  dispatch({
    type: GET_FAVORITE_ID,
    payload: dishes.map(e => e._id)
  });
};

export const getFavoriteImg = () => (dispatch, getState) => {
  const { data } = getState().favoriteData;
  let dishes = [];
  if (data) { dishes = data.dishes; };
  dispatch({
    type: GET_FAVORITE_IMG,
    payload: dishes.map(e => e.image)
  });
};

export const getFavoriteCategory = () => (dispatch, getState) => {
  const { data } = getState().favoriteData;
  let dishes = [];
  if (data) { dishes = data.dishes; };
  dispatch({
    type: GET_FAVORITE_CATEGORY,
    payload: dishes.map(e => e.category)
  });
};
export const getFavoriteAmount = () => (dispatch, getState) => {
  const { data } = getState().favoriteData;
  let dishes = [];
  if (data) { dishes = data.dishes; };
  dispatch({
    type: GET_FAVORITE_AMOUNT,
    payload: dishes.length
  });
};

export const buildFavoriteList = () => async (dispatch, getState) => {
  try {

    await dispatch(fetchFavorite());
    dispatch(getFavoriteId());
    dispatch(getFavoriteImg());
    dispatch(getFavoriteName());
    dispatch(getFavoriteAmount());
    dispatch(getFavoriteCategory());
    let { menuId } = getState();
    if (menuId.length === 0) {
      await dispatch(fetchMenu());
      dispatch(getMenuId());
    }
    const { favoriteId } = getState();
    menuId = getState().menuId;
    const list = menuId.map(id => ({ id, liked: favoriteId.includes(id) }));
    dispatch({
      type: BUILD_FAVORITELIST,
      payload: list
    });
    console.log('Favorite List is built')
  } catch (err) {
    console.error(err);
  }
};
const addFavorite = id => async (dispatch, getState) => {
  try {
    const { token } = getState();
    // add "../" to avoid to access /menu/favorites/${id}
    const response = await axios.post(`../favorites/${id}`, {}, {
      headers: { 'Authorization': `bearer ${token}` }
    });
    console.log('add');
    dispatch(fetchFavoriteSuccess(response));
    dispatch(getFavoriteId());
    dispatch(getFavoriteImg());
    dispatch(getFavoriteName());
    dispatch(getFavoriteAmount());
    dispatch(getFavoriteCategory());
    dispatch({
      type: ADD_FAVORITE,
      payload: id
    });
  } catch (err) {
    console.error(err);
  }
};
const removeFavorite = id => async (dispatch, getState) => {
  try {
    const { token } = getState();
    const response = await axios.delete(`../favorites/${id}`, {
      headers: { 'Authorization': `bearer ${token}` }
    });
    console.log('remove');
    dispatch(fetchFavoriteSuccess(response));
    dispatch(getFavoriteId());
    dispatch(getFavoriteImg());
    dispatch(getFavoriteName());
    dispatch(getFavoriteAmount());
    dispatch(getFavoriteCategory());
    dispatch({
      type: REMOVE_FAVORITE,
      payload: id
    });
  } catch (err) {
    console.error(err);
  }
};

export const modifyFavorite = id => async (dispatch, getState) => {
  let { favoriteList } = getState();
  if (favoriteList.length === 0) {
    await dispatch(buildFavoriteList());
    favoriteList = getState().favoriteList;
  }
  // if true -> remove the favorite : if false -> add the favorite
  favoriteList.find(e => e.id === id).liked ? dispatch(removeFavorite(id)) : dispatch(addFavorite(id));
};
