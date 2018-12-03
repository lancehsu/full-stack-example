const Auth = {
  logIn(username, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' }
        });
        const { success, token, status } = await response.json();
        this.setToken(token);
        console.log(`Login: ${success}`)
        return success ? resolve(status) : reject(status);
      } catch (err) {
        console.log(err);
      }
    })
  },
  checkLogIn() {
    return new Promise(async (resolve, reject) => {
      const token = this.getToken();
      try {
        const response = await fetch('/users/checkJWTToken', {
          method: 'GET',
          headers: { 'Authorization': `bearer ${token}` }
        });
        const { success } = await response.json();
        return success ? resolve(true) : reject(false);
      } catch (err) {
        console.log(err);
      }
    })

  },
  getUserInfo() {
    return new Promise(async (resolve, reject) => {
      const token = this.getToken();
      try {
        const response = await fetch('/users/me', {
          method: 'GET',
          headers: {
            'Authorization': `bearer ${token}`
          }
        });
        const data = await response.json();
        return resolve(data);
      } catch (err) {
        console.log(err);
      }
    });
  },
  logOut() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
  },
  setToken(token) {
    localStorage.setItem('id_token', token);
  },
  getToken() {
    return localStorage.getItem('id_token');
  }

}

export default Auth;