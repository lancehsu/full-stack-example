import React, { Component } from 'react';
import NavList from '../container/NavListContainer';
import NavUser from '../container/NavUserContainer';
import Main from './Main';
import { navStyle } from '../style/Style';

const initState = {
  loginStatus: false,
  token: '',
  userInfo: {
    id: '',
    username: '',
    firstname: '',
    lastname: ''
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }
  // hydrateStateWithSessionStorage() {
  //   // for all items in state
  //   for (let key in initState) {
  //     // if the key exists in sessionStorage
  //     if (sessionStorage.hasOwnProperty(key)) {
  //       // get the key's value from sessionStorage
  //       let value = sessionStorage.getItem(key);

  //       // parse the sessionStorage string and setState
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (e) {
  //         // handle empty string
  //         this.setState({ [key]: value });
  //       }
  //     }
  //   }
  // }
  // saveStateToSessionStorage = () => {
  //   // for every item in React state
  //   for (let key in initState) {
  //     // save to sessionStorage
  //     sessionStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // }

  // componentDidMount() {
  //   this.hydrateStateWithSessionStorage();

  //   // add event listener to save state to sessionStorage
  //   // when user leaves/refreshes the page
  //   window.addEventListener(
  //     'beforeunload',
  //     this.saveStateToSessionStorage
  //   );
  // }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     'beforeunload',
  //     this.saveStateToSessionStorage
  //   );

  //   // saves if component has a chance to unmount
  //   this.saveStateToSessionStorage();
  // }
  render() {
    return (
      <div className='App'>
        <nav className='Navbar' style={navStyle}>
          <NavList className='navList' />
          <NavUser className='navUser' />
        </nav>
        <Main className='Main' />
      </div>
    )
  }
}

export default App;
