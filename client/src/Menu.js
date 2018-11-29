import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [], amount: 0, names: [], category: []
      , selector: [], imgs: [], filterIdx: [], fallbackImg: '/images/empty-dish.jpg'
    };
  }
  componentDidMount() {
    this.getMenu();
  }
  getMenu = async () => {

    const response = await fetch('/dishes', { method: 'GET' });
    const data = await response.json();
    const names = data.map(e => e.name);
    const amount = names.length;
    const imgs = data.map(e => e.image);
    const id = data.map(e => e._id);
    const category = data.map(e => e.category);
    let selector = category.filter((e, i) => category.indexOf(e) === i);
    selector = ['All'].concat(selector);
    let filterIdx = new Array(amount);
    for (let i = 0; i < amount; i++) {
      filterIdx[i] = i;
    }
    console.log(filterIdx);
    this.setState({ id, amount, names, category, selector, imgs, filterIdx});
  }

  filtering = (e) => {
    const filterValue = e.target.value;
    let filterIdx = [];
    if (filterValue === 'All') {
      filterIdx = new Array(this.state.amount);
      for (let i = 0; i < this.state.amount; i++) {
        filterIdx[i] = i;
      }
    } else {
      this.state.category.forEach((e, i) => e === filterValue && filterIdx.push(i));
    }
    // console.log(filterIdx);
    this.setState({ filterIdx });
  }

  render() {
    let { id, names, selector, filterIdx, imgs, fallbackImg } = this.state;

    return (
      <div className='Menu'>
        <div className='title'>
          <h1>Menu</h1>
          <select id='selector' onChange={this.filtering}>
            {selector.map((e, i) => <option value={e} key={i}>{e}</option>)}
          </select>
        </div>
        <div className='container'>
          {filterIdx.map((i) => (
            <div className='item' key={id[i]}>
              <div className='item-img-container'>
                <Link to={`/menu/${id[i]}`}>
                  <img className='item-img' src={imgs[i]} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} alt='img break' />
                </Link>
              </div>
              <div className='item-name'>{names[i]}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;