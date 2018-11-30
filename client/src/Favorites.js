import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';
import './Pages.css';

class Favorites extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Auth.checkLogIn()
      .catch(e => {
          alert('Log in first!!!!');
          this.props.history.push('/');
        })
      
  }
  render() {
    return (
      <div className='Favorites'>
        <h1>Favorites</h1>
      </div>
    );
  }
}

export default Favorites;