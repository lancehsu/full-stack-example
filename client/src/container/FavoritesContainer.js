import React, { Component } from 'react';
import Favorites from '../component/Favorites';
import Auth from '../Auth';

class FavoritesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false };
  }
  componentWillMount() {
    Auth.checkLogIn()
      .then(res => this.setState({ login: true }))
      .catch(e => {
        alert('Log in first!!!!');
        this.props.history.push('/');
      })
  }
  render() {
    return <Favorites />;
  }
}

export default FavoritesContainer;