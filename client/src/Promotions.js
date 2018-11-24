import React, { Component } from 'react';
import './Pages.css';

class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = { names: [], imgs: [] };

  }
  componentDidMount() {
    this.getMenu();
  }
  getMenu = async () => {
    const response = await fetch('/promotions', { method: 'GET' });
    const data = await response.json();
    let names = data.map(e => e.name);
    let imgs = data.map(e => e.image);
    this.setState({ names, imgs });
  }
  render() {
    const { imgs } = this.state;
    const { names } = this.state;
    return (
      <div class='Menu'>
        <h1>Promotions</h1>
        <div class='container'>
        {names.map((e, i) => {
            const iImg = {
              backgroundImage: `url(${imgs[i]})`
            }

            return (
              <div class='item'>
                <div class='item-img' style={iImg}></div>
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

export default Promotions;