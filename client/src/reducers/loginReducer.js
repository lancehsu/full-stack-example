import {
  FILL_USERNAME, FILL_PASSWORD, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILED,
  GET_LOGIN_STATUS, GET_TOKEN, FETCH_MY_INFO_PENDING, FETCH_MY_INFO_RESPONSE,
  GET_MY_FIRSTNAME, GET_MY_LASTNAME, GET_MY_ACCOUNT, GET_MY_ID, VERIFY_ADMIN,
  LOG_OUT, GET_USERS_FIRSTNAME,GET_USERS_LASTNAME, GET_USERS_ACCOUNT, GET_USERS_ID, GET_USERS_ADMIN
} from '../actions/loginActions';

export const filledUsername = (state = '', action) => {
  return action.type === FILL_USERNAME ? action.payload : state;
}
export const filledPassword = (state = '', action) => {
  return action.type === FILL_PASSWORD ? action.payload : state;
}

export const loginResponse = (state = null, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return true;
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGIN_FAILED:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
}

export const loginStatus = (state = false, action) => {
  switch (action.type) {
    case GET_LOGIN_STATUS:
    console.log('login!');
      return action.payload;
    case LOG_OUT:
      console.log('logout!')
      return false;
    default:
      return state;
  }
}
export const token = (state = '', action) => {
  switch (action.type) {
    case GET_TOKEN:
      return action.payload;
    case LOG_OUT:
      return '';
    default:
      return state;
  }
};
export const myInfoData = (state = null, action) => {
  switch (action.type) {
    case FETCH_MY_INFO_PENDING:
      return true;
    case FETCH_MY_INFO_RESPONSE:
      return action.payload;
    case LOG_OUT:
      return null;
    default:
      return state;
  }
}

export const myFirstname = (state = '', action) => {
  switch (action.type) {
    case GET_MY_FIRSTNAME:
      return action.payload;
    case LOG_OUT:
      return '';
    default:
      return state;
  }
};
export const myLastname = (state = '', action) => {
  switch (action.type) {
    case GET_MY_LASTNAME:
      return action.payload;
    case LOG_OUT:
      return '';
    default:
      return state;
  }
};
export const myAccount = (state = '', action) => {
  switch (action.type) {
    case GET_MY_ACCOUNT:
      return action.payload;
    case LOG_OUT:
      return '';
    default:
      return state;
  }
};
export const myId = (state = '', action) => {
  switch (action.type) {
    case GET_MY_ID:
      return action.payload;
    case LOG_OUT:
      return '';
    default:
      return state;
  }
};
export const adminVerification = (state = false, action) => {
  switch (action.type) {
    case VERIFY_ADMIN:
      return action.payload;
    case LOG_OUT:
      return false;
    default:
      return state;
  }
};

export const usersFirstname = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_FIRSTNAME:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
}
export const usersLastname = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_LASTNAME:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
}
export const usersAccount = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_ACCOUNT:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
}
export const usersId = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_ID:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
}
export const usersAdmin = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_ADMIN:
      return action.payload;
    case LOG_OUT:
      return [];
    default:
      return state;
  }
}