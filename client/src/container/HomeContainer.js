import React, { Component } from 'react';
import Home from '../component/Home';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishId: [], dishName: [], dishImg: [], dishFallbackImg: '/images/empty-dish.jpg', viewDish: [], dishAmount: 0
      , promoImg: [], promoFallbackImg: '/images/promotions-icon.jpg'
    }
  }

  componentDidMount() {
    this.getInit();
  }
  getInit = async () => {
    try {
      let response = await fetch('/dishes', { method: 'GET' });
      let data = await response.json();
      const dishId = data.map(e => e._id);
      const dishName = data.map(e => e.name);
      const dishImg = data.map(e => e.image);
      const dishAmount = dishName.length;
      response = await fetch('/promotions', { method: 'GET' });
      data = await response.json();
      const promoImg = data.map(e => e.image);
      this.setState({ dishId, dishName, dishImg, viewDish: [0, 1], dishAmount, promoImg });
    } catch (err) {
      console.log(err);
    }
  }
  nextOne = (e) => {
    const dir = e.target.id; //left or right
    let { viewDish, dishAmount } = this.state;
    if (dir === 'left') {
      viewDish = viewDish.map(e => (e === dishAmount - 1) ? 0 : e + 1);
    } else {
      viewDish = viewDish.map(e => (e === 0) ? dishAmount - 1 : e - 1);
    }
    this.setState({ viewDish });
  }

  render() {
    const { dishId, dishName, dishImg, dishFallbackImg, viewDish, promoImg, promoFallbackImg } = this.state;
    const nextOne = this.nextOne;
    return (
      <Home
        dishId={dishId}
        dishName={dishName}
        dishImg={dishImg}
        dishFallbackImg={dishFallbackImg}
        viewDish={viewDish}
        promoImg={promoImg}
        promoFallbackImg={promoFallbackImg}
        nextOne={nextOne}
      />
    );
  }
}

export default HomeContainer;