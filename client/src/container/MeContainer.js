import React, { Component } from 'react';
import Me from '../component/Me';
import Auth from '../Auth';

class MeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false, firstname: '', lastname: '', username: '' };
  }
  componentWillMount() {
    this.getInfo();
  }

  getInfo = async () => {
    try {
      const login = await Auth.checkLogIn();
      if (!login) {
        alert('Log in first!!!');
        this.props.history.push('/');
        return;
      }
      const { firstname, lastname, username } = await Auth.getUserInfo();
      this.setState({ login, firstname, lastname, username });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { firstname, lastname, username } = this.state;
    return <Me firstname={firstname} lastname={lastname} username={username} />;
  }
}

export default MeContainer;