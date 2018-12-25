import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMenu, getMenuId, getMenuName, getMenuImg, getMenuAmount } from '../actions/menuActions';
import { fetchPromo, getPromoImg } from '../actions/promoActions';
import { scrollToLeft, scrollToRight } from '../actions';
import Home from '../component/Home';

class HomeContainer extends Component {

  componentDidMount() {
    this.getHome();
  }
  getHome = async () => {
    try {
      const { fetchMenu, getMenuName, getMenuId, getMenuImg, getMenuAmount, fetchPromo, getPromoImg } = this.props;
      await Promise.all([fetchMenu(), fetchPromo()]);
      getMenuName();
      getMenuId();
      getMenuImg();
      getMenuAmount();
      getPromoImg();
    } catch (err) {
      console.log(err);
    }
  }
  nextOne = (e) => {
    const dir = e.target.id; //left or right
    const { menuAmount, scrollToLeft, scrollToRight } = this.props;
    dir === 'left' ? scrollToLeft(menuAmount) : scrollToRight(menuAmount);
  }

  render() {
    const { menuName, menuId, menuImg, promoImg, scrollView } = this.props;
    return (
      <Home
        dishId={menuId}
        dishName={menuName}
        dishImg={menuImg}
        viewDish={scrollView}
        promoImg={promoImg}
        nextOne={this.nextOne}
      />
    );
  }
}

const mapStateToProp = state => ({
  menuName: state.menuName,
  menuId: state.menuId,
  menuImg: state.menuImg,
  menuAmount: state.menuAmount,
  promoImg: state.promoImg,
  scrollView: state.scrollView
});

const mapDispatchToProp = dispatch => ({
  fetchMenu: () => dispatch(fetchMenu()),
  getMenuId: () => dispatch(getMenuId()),
  getMenuName: () => dispatch(getMenuName()),
  getMenuImg: () => dispatch(getMenuImg()),
  getMenuAmount: () => dispatch(getMenuAmount()),
  fetchPromo: () => dispatch(fetchPromo()),
  getPromoImg: () => dispatch(getPromoImg()),
  scrollToLeft: amount => dispatch(scrollToLeft(amount)),
  scrollToRight: amount => dispatch(scrollToRight(amount))
});

export default connect(mapStateToProp, mapDispatchToProp)(HomeContainer);