import React, { Component } from 'react';
import Menu from '../component/Menu'

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: [], amount: 0, names: [], category: []
      , select: [], imgs: [], filterIdx: [], fallbackImg: '/images/empty-dish.jpg'
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
    let select = category.filter((e, i) => category.indexOf(e) === i);
    select = ['All'].concat(select);
    let filterIdx = new Array(amount);
    for (let i = 0; i < amount; i++) {
      filterIdx[i] = i;
    }
    //if it's logged in, add favorite checkbox
    // await Auth.getUserInfo();
    // console.log(filterIdx);
    this.setState({ id, amount, names, category, select, imgs, filterIdx });
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
    const { id, names, select, filterIdx, imgs, fallbackImg } = this.state;
    const filtering = this.filtering;
    return <Menu id={id} names={names} select={select} filterIdx={filterIdx} imgs={imgs} fallbackImg={fallbackImg} filtering={filtering} />;
  }
}

export default MenuContainer;