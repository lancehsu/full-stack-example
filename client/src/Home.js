import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishId: [], dishName: [], dishImg: [], dishFallbackImg: '/images/empty-dish.jpg', viewDish: [], dishAmount: 0
      , promoId: [], promoName: [], promoImg: [], promoFallbackImg: '/images/promotions-icon.jpg'
    }
  }

  componentDidMount() {
    this.getInit();
  }
  getInit = async () => {
    let response = await fetch('/dishes', { method: 'GET' });
    let data = await response.json();
    const dishId = data.map(e => e._id);
    const dishName = data.map(e => e.name);
    const dishImg = data.map(e => e.image);
    const dishAmount = dishName.length;
    response = await fetch('/promotions', { method: 'GET' });
    data = await response.json();
    const promoId = data.map(e => e._id);
    const promoName = data.map(e => e.name);
    const promoImg = data.map(e => e.image);
    this.setState({ dishId, dishName, dishImg, viewDish: [0, 1], dishAmount, promoId, promoName, promoImg });
  }
  nextOne = (e) => {
    const dir = e.target.id; //left or right
    let { viewDish, dishAmount } = this.state;
    if (dir === 'left') {
      viewDish = viewDish.map(e => (e === 0) ? dishAmount - 1 : e - 1);
    } else {
      viewDish = viewDish.map(e => (e === dishAmount - 1) ? 0 : e + 1);
    }
    console.log(viewDish);
    this.setState({ viewDish });
  }

  render() {
    let { dishId, dishName, dishImg, dishFallbackImg, viewDish, promoId, promoName, promoImg, promoFallbackImg } = this.state;
    return (
      <div className='Home'>
          <div id='profile-img' className='home-item'></div>
          <div className='promo home-item'>
            <div><h1>Promotions</h1></div>
            <div className='promo-container'>
              <img className='promo-img' src={promoImg[promoImg.length - 1]} onError={(e) => { e.target.onerror = null; e.target.src = promoFallbackImg }} alt='img break' />
              <Link to='/promotions' className='icon'>Go!</Link>
            </div>
          </div>
          <div id='profile-menu' className='home-item'>
            <div><h1><Link to='/menu' id='menu-title'>Menu</Link></h1></div>
            <div className='menu-scroll-plate'>
              <div onClick={this.nextOne} className='arrow' id='left'></div>
              <div className='dish-container'>
                {viewDish.map((i) => (
                  <div className='dish' key={dishId[i]}>
                    <div className='dish-img-container'>
                      <Link to={`/menu/${dishId[i]}`}>
                        <img className='dish-img' src={dishImg[i]} onError={(e) => { e.target.onerror = null; e.target.src = dishFallbackImg }} alt='img break' />
                      </Link>
                    </div>
                    <div className='dish-name'>{dishName[i]}</div>
                  </div>
                ))}
              </div>
              <div onClick={this.nextOne} className='arrow' id='right'></div>
            </div>
          </div>
          <div id='aboutus' className='home-item'>
            <h1>About Us</h1>
            <p>Here is our info.</p>
          </div>
        </div>
    );
  }
}

export default Home;