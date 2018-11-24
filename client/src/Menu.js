import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { id: [], names: [], imgs: [], fallbackImg: '/images/empty-dish.jpg' };

  }
  componentDidMount() {
    this.getMenu();
  }
  getMenu = async () => {
    const response = await fetch('/dishes', { method: 'GET' });
    const data = await response.json();
    let names = data.map(e => e.name);
    let imgs = data.map(e => e.image);
    let id = data.map(e => e.id);
    this.setState({ id, names, imgs });
  }
  render() {
    const { id, names, imgs, fallbackImg } = this.state;
    return (
      <div class='Menu'>
        <h1>Menu</h1>
        <div class='container'>
        {names.map((e, i) => {

            return (
              <div class='item'>
                <div class='item-img-container'>
                  <Link to ><img class='item-img' onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} src={imgs[i]} alt='img break' /></Link>
                </div>
                <div class='item-name'>{e}</div>
              </div>
            );
          })
        }
        </div>

      </div>
    );
  }
}

export default Menu;