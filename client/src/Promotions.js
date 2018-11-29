import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = { id: [], names: [], imgs: [], fallbackImg: '/images/promotions-icon.jpg' };
  }
  componentDidMount() {
    this.getPromos();
  }
  getPromos = async () => {
    const response = await fetch('/promotions', { method: 'GET' });
    const data = await response.json();
    const names = data.map(e => e.name);
    const imgs = data.map(e => e.image);
    const id = data.map(e => e._id);
    this.setState({ id, names, imgs });
  }
  render() {
    const { id, names, imgs, fallbackImg } = this.state;
    return (
      <div className='Promotions'>
        <div className='title'>
          <h1>Promotions</h1>
        </div>
        <div className='container'>
        {names.map((name, i) => {
            return (
              <div className='item' key={id[i]}>
                <div className='item-img-container'>
                  <Link to={`/promotions/${id[i]}`}>
                    <img className='item-img' src={imgs[i]} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} alt='img break' />
                  </Link>
                </div>
                <div className='item-name'>{name}</div>
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