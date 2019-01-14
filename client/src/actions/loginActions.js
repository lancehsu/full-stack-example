import axios from 'axios';
import { buildFavoriteList } from './favoritelistActions';

export const FILL_USERNAME = 'FILL_USERNAME';
export const FILL_PASSWORD = 'FILL_PASSWORD';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_LOGIN_STATUS = 'GET_LOGIN_STATUS';
export const FETCH_MY_INFO_PENDING = 'FETCH_MY_INFO_PENDING';
export const FETCH_MY_INFO_RESPONSE = 'FETCH_MY_INFO_RESPONSE';
export const GET_MY_FIRSTNAME = 'GET_MY_FIRSTNAME';
export const GET_MY_LASTNAME = 'GET_MY_LASTNAME';
export const GET_MY_ACCOUNT = 'GET_MY_ACCOUNT';
export const GET_MY_ID = 'GET_MY_ID';
export const VERIFY_ADMIN = 'VERIFY_ADMIN';
export const LOG_OUT = 'LOG_OUT';
export const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
export const GET_USERS_FIRSTNAME = 'GET_USERS_FIRSTNAME';
export const GET_USERS_LASTNAME = 'GET_USERS_LASTNAME';
export const GET_USERS_ID = 'GET_USERS_ID';
export const GET_USERS_ACCOUNT = 'GET_USERS_ACCOUNT';
export const GET_USERS_ADMIN = 'GET_USERS_ADMIN';

//login stuffs
export const logout = () => ({
  type: LOG_OUT
})
export const login = () => async (dispatch, getState) => {
  dispatch(loginPending());
  try {
    const { filledUsername, filledPassword } = getState();
    const response = await axios.post('/users/login',
      JSON.stringify({ username: filledUsername, password: filledPassword }), {
        headers: { 'content-type': 'application/json' }
      });
    const { data } = response;
    alert(data.status);
    dispatch(loginSuccess(response));
    if (data.success) {
      dispatch(getToken(data.token));
      dispatch(getLoginStatus(data.success));
      await dispatch(fetchMyInfo(data.token));

      let { firstname, lastname, username, _id, admin } = getState().myInfoData.data;
      
      dispatch(getMyFirstname(firstname));
      dispatch(getMyLastname(lastname));
      dispatch(getMyAccount(username));
      dispatch(getMyId(_id));
      dispatch(verifyAdmin(admin));
      await dispatch(buildFavoriteList());
    };
  } catch (err) {
    console.error(err);
    dispatch(loginFailed(err));
  }
};
export const fillUsername = username => ({
  type: FILL_USERNAME,
  payload: username
});
export const fillPassword = password => ({
  type: FILL_PASSWORD,
  payload: password
})
const loginPending = () => ({
  type: LOGIN_PENDING
});
const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});
const loginFailed = err => (dispatch, getState) => {
  const { filledUsername, filledPassword } = getState();
  if (filledUsername === '') {
    dispatch(fillPassword(''));
    alert('Username needs to be filled!');
  } else if (filledPassword === '') {
    dispatch(fillUsername(''));
    alert('Password needs to be filled!');
  } else {
    dispatch(fillUsername(''));
    dispatch(fillPassword(''));
    alert('Wrong username or password!');
  }
  return {
    type: LOGIN_FAILED,
    payload: err
  }
};
const getToken = token => ({
  type: GET_TOKEN,
  payload: token
});
const getLoginStatus = success => ({
  type: GET_LOGIN_STATUS,
  payload: success
});

const fetchMyInfoPending = () => ({
  type: FETCH_MY_INFO_PENDING
});
const fetchMyInfoResponse = data => ({
  type: FETCH_MY_INFO_RESPONSE,
  payload: data
});
const fetchMyInfo = token => async dispatch => {
  dispatch(fetchMyInfoPending());
  const response = await axios.get('/users/me', {
    headers: { 'Authorization': `bearer ${token}` }
  });
  dispatch(fetchMyInfoResponse(response));
};

const getMyFirstname = firstname => ({
  type: GET_MY_FIRSTNAME,
  payload: firstname
})
const getMyLastname = lastname => ({
  type: GET_MY_LASTNAME,
  payload: lastname
});

export const getMyAccount = username => (dispatch, getState) => {
  dispatch({
    type: GET_MY_ACCOUNT,
    payload: username
  })
};

export const getMyId = _id => (dispatch, getState) => {
  dispatch({
    type: GET_MY_ID,
    payload: _id
  })
};
export const verifyAdmin = admin => (dispatch, getState) => {
  dispatch({
    type: VERIFY_ADMIN,
    payload: admin
  })
};

export const facebookLogin = fbResponse => async (dispatch) => {
  try {
    const { name, id, accessToken } = fbResponse;
    const response = await axios.get('users/facebook/token', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });
    const { data } = response;
    if (data.success) {
      alert(data.status);
      const nameArray = name.split(' ');
      let firstname, lastname;
      if (nameArray.length === 2) {
        // English name
        firstname = nameArray[0];
        lastname = nameArray[1];
      } else if (nameArray.length === 1) {
        // Chinese name
        firstname = nameArray[0].slice(1);
        lastname = nameArray[0][0];
      } else {
        // others
        firstname = nameArray[0];
        lastname = nameArray[nameArray.length - 1];
      }

      dispatch(getLoginStatus(data.success));
      dispatch(getMyFirstname(firstname));
      dispatch(getMyLastname(lastname));
      dispatch(getMyAccount(name));
      dispatch(getToken(data.token));
      dispatch(getMyId(id));
    }
  } catch (err) {
    console.error(err);
    alert(err);
  }
};
export const getUsersFirstname = firstnames => ({
  type: GET_USERS_FIRSTNAME,
  payload: firstnames
});
export const getUsersLastname = lastnames => ({
  type: GET_USERS_LASTNAME,
  payload: lastnames
});
export const getUsersId = ids => ({
  type: GET_USERS_ID,
  payload: ids
});
export const getUsersAccount = accounts => ({
  type: GET_USERS_ACCOUNT,
  payload: accounts
});
export const getUsersAdmin = adminStatus => ({
  type: GET_USERS_ADMIN,
  payload: adminStatus
})
export const getUserslist = () => async (dispatch, getState) => {
  const { token, adminVerification } = getState();
  if (adminVerification) {
    const response = await axios.get('/users', {
      headers: { 'Authorization': `bearer ${token}` }
    });
    const { data } = response;
    dispatch(getUsersFirstname(data.map(e => e.firstname)));
    dispatch(getUsersLastname(data.map(e => e.firstname)));
    dispatch(getUsersId(data.map(e => e._id)));
    dispatch(getUsersAccount(data.map(e => e.username)));
    dispatch(getUsersAdmin(data.map(e => e.admin)));
  }
};