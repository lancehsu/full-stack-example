import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFavorite, getFavoriteId, getFavoriteName, getFavoriteImg, getFavoriteCategory, getFavoriteAmount, modifyFavorite } from '../actions/favoriteActions';
import Favorites from '../component/Favorites';

class FavoritesContainer extends Component {

  componentWillMount() {
    const { loginStatus } = this.props;
    !loginStatus && alert('Login first!!!');
  }

  render() {
    const { loginStatus, names, ids, imgs, categories, amount} = this.props;
    const { modifyFavorite } = this.props
    return (loginStatus) ? (
      <Favorites
        names={names}
        ids={ids}
        imgs={imgs}
        categories={categories}
        amount={amount}
        checked={true}
        modifyFavorite={e => modifyFavorite(e.target.id)}
      />) : <Redirect to='/' />;
  }
}

const mapStateToProp = state => ({
  loginStatus: state.loginStatus,
  favoriteData: state.favoriteData,
  names: state.favoriteName,
  ids: state.favoriteId,
  imgs: state.favoriteImg,
  categories: state.favoriteCategory,
  amount: state.favoriteAmount,
  favoriteList: state.favoriteList
});

const mapDispatchToProp = dispatch => ({
  fetchFavorite: () => dispatch(fetchFavorite()),
  getFavoriteId: () => dispatch(getFavoriteId()),
  getFavoriteName: () => dispatch(getFavoriteName()),
  getFavoriteImg: () => dispatch(getFavoriteImg()),
  getFavoriteCategory: () => dispatch(getFavoriteCategory()),
  getFavoriteAmount: () => dispatch(getFavoriteAmount()),
  modifyFavorite: id => dispatch(modifyFavorite(id))
});

export default connect(mapStateToProp, mapDispatchToProp)(FavoritesContainer);