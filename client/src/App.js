import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
import NavbarContainer from './container/NavbarContainer';
import Main from './component/Main';
import { reloadState } from './actions/loginActions';

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    const allCookies = cookies.getAll();
    const { reloadState } = props;

    reloadState(allCookies);
    for (let [key, value] of Object.entries(allCookies)) {
      cookies.remove(key);
    }
  }
  componentWillMount() {
    window.addEventListener('beforeunload', this.saveState);
  }
  componentWillUnmount() {
    const { cookies } = this.props;
    const allCookies = cookies.getAll();
    for (let key of Object.entries(allCookies)) {
      cookies.remove(key);
    }
    window.removeEventListener('beforeunload', this.saveState);
  }

  saveState = () => {
    const { cookies } = this.props;
    const { state } = this.props;
    for (let [key, value] of Object.entries(state)) {
      if (key === 'loginStatus' && value === false) {
        const allCookies = cookies.getAll();
        for (let [key, value] of Object.entries(allCookies)) {
          cookies.remove(key);
        }
        break;
      }
      key === 'loginStatus' && cookies.set(key, value);
      key === 'token' && cookies.set(key, value);
    }
    }

    render() {
      return (
        <div className='App'>
          <NavbarContainer />
          <Main />
        </div>
      );
    }
  }
  const mapStateToProp = state => ({
    state
  });
  const mapDispatchToProp = dispatch => ({
    reloadState: allCookies => dispatch(reloadState(allCookies))
  });
  export default withCookies(connect(mapStateToProp, mapDispatchToProp)(App));
