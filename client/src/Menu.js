import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class='Menu'>
        <div class='page'><h1>Menu</h1></div>
        <div class='list'></div>
      </div>
    );
  }
}
export default Menu;