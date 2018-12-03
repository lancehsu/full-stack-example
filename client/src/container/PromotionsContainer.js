import React, { Component } from 'react';
import Promotions from '../component/Promotions';

class PromotionsContainer extends Component {
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
    return <Promotions id={id} names={names} imgs={imgs} fallbackImg={fallbackImg} />;
  }
}

export default PromotionsContainer;