import axios from 'axios';

export const FETCH_DETAIL_PENDING = 'FETCH_DETAIL_PENDING';
export const FETCH_DETAIL_SUCCESS = 'FETCH_DETAIL_SUCCESS';
export const FETCH_DETAIL_FAILED = 'FETCH_DETAIL_FAILED';
export const GET_DETAIL_ID = 'GET_DETAIL_ID';
export const GET_DETAIL_NAME = 'GET_DETAIL_NAME';
export const GET_DETAIL_IMG = 'GET_DETAIL_IMG';
export const GET_DETAIL_CATEGORY = 'GET_DETAIL_CATEGORY';
export const GET_DETAIL_PRICE = 'GET_DETAIL_PRICE';
export const GET_DETAIL_ABBR = 'GET_DETAIL_ABBR';
export const GET_DETAIL_DESCRIPTION = 'GET_DETAIL_DESCRIPTION';
export const GET_DETAIL_DESIGNATION = 'GET_DETAIL_DESIGNATION';
export const GET_DETAIL_COMMENTS = 'GET_DETAIL_COMMENTS';
export const DETAIL_UNMOUNT = 'DETAIL_UNMOUNT';


// fectch data
const fetchDetailPending = () => ({
  type: FETCH_DETAIL_PENDING
});

const fetchDetailSuccess = data => ({
  type: FETCH_DETAIL_SUCCESS,
  payload: data
});

const fetchDetailFailed = err => ({
  type: FETCH_DETAIL_FAILED,
  payload: err
});
export const fetchDetail = url => async (dispatch, getState) => {
  dispatch(fetchDetailPending());
  try {
    const { token } = getState();
    const response = await axios.get(url, {
      headers: { 'Authorization': `bearer ${token}` }
    });
    dispatch(fetchDetailSuccess(response));
  } catch (err) {
    dispatch(fetchDetailFailed(err));
  }
};

export const getDetailName = () => (dispatch, getState) => {
  const { data } = getState().detailData;
  dispatch({
    type: GET_DETAIL_NAME,
    payload: data.name
  });
};
export const getDetailId = () => (dispatch, getState) => {
  const { data } = getState().detailData;
  dispatch({
    type: GET_DETAIL_ID,
    payload: data._id || data.dish._id
  });
};

export const getDetailImg = () => (dispatch, getState) => {
  const { data } = getState().detailData;
  dispatch({
    type: GET_DETAIL_IMG,
    payload: data.image
  });
};
export const getDetailCategory = () => (dispatch, getState) => {
  const { data } = getState().detailData;
  dispatch({
    type: GET_DETAIL_CATEGORY,
    payload: data.category
  });
};
export const getDetailAbbr = () => (dispatch, getState) => {
  const { data } = getState().detailData;
  dispatch({
    type: GET_DETAIL_ABBR,
    payload: data.abbr
  });
};
export const getDetailPrice = () => (dispatch, getState) => {
  const { data } = getState().detailData;
  dispatch({
    type: GET_DETAIL_PRICE,
    payload: data.price
  })
};
export const getDetailDescription = () => (dispatch, getState) => {
  const { data } = getState().detailData;
  dispatch({
    type: GET_DETAIL_DESCRIPTION,
    payload: data.description || data.dish.description
  });
};
export const getDetailDesignation = () => (dispatch, getState) => {
  const { data } = getState().detailData;
  dispatch({
    type: GET_DETAIL_DESIGNATION,
    payload: data.designation
  });
};
export const getDetailComments = comments => (dispatch, getState) => {
  if (!comments) {
    const { data } = getState().detailData;
    comments = data.comments;
  }
  dispatch({
    type: GET_DETAIL_COMMENTS,
    payload: comments
  });
};
export const detailUnmount = () => ({
  type: DETAIL_UNMOUNT
})