import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail, getDetailName, getDetailId, getDetailImg, getDetailCategory, getDetailPrice, getDetailDescription, getDetailComments, detailUnmount } from '../actions/detailActions';
import { getCommentsContext, getCommentsId, getCommentsRating, getCommentsAuthor, getCommentsAuthorId, getCommentsAuthorName } from '../actions/commentActions';
import { modifyFavorite } from '../actions/favoritelistActions';
import MenuDetail from '../component/MenuDetail';
import CommentsContainer from './CommentsContainer';
import { detailStyle } from '../style/Style';

class MenuDetailContainer extends Component {

  componentDidMount() {
    this.getDetail();
  }
  componentWillUnmount() {
    const { detailUnmount } = this.props;
    detailUnmount();
  }
  getDetail = async () => {
    const {
      fetchDetail, getDetailName, getDetailId, getDetailCategory,
      getDetailImg, getDetailPrice, getDetailDescription,
      getDetailComments, getCommentsContext, getCommentsId, getCommentsRating,
      getCommentsAuthor, getCommentsAuthorName, getCommentsAuthorId
    } = this.props;
    let url = this.props.location.pathname;
    url = url.replace('menu', 'dishes');
    await fetchDetail(url);
    getDetailName();
    getDetailId();
    getDetailCategory();
    getDetailImg();
    getDetailPrice();
    getDetailDescription();
    getDetailComments();
    getCommentsContext();
    getCommentsAuthor();
    getCommentsId();
    getCommentsRating();
    getCommentsAuthorId();
    getCommentsAuthorName();
  }

  render() {
    const { loginStatus, favoriteList, name, img, id, category, price, description } = this.props;
    const { modifyFavorite } = this.props;
    const favorite = favoriteList.find(e => e.id === id);
    let checked = false;
    if (favorite) { checked = favorite.liked; }

    return (
      <div className='MenuDetail' style={detailStyle}>
        <MenuDetail
          loginStatus={loginStatus}
          checked={checked}
          name={name}
          id={id}
          img={img}
          description={description}
          price={price}
          category={category}
          favoriteClick={e => modifyFavorite(e.target.id)}
        />
        <CommentsContainer />
      </div>
    );
  }
}

const mapStateToProp = state => ({
  loginStatus: state.loginStatus,
  detailData: state.detailData,
  name: state.detailName,
  id: state.detailId,
  img: state.detailImg,
  category: state.detailCategory,
  price: state.detailPrice,
  description: state.detailDescription,
  comments: state.detailComments,
  favoriteList: state.favoriteList
});

const mapDispatchToProp = dispatch => ({
  fetchDetail: url => dispatch(fetchDetail(url)),
  modifyFavorite: dishId => dispatch(modifyFavorite(dishId)),
  getDetailName: () => dispatch(getDetailName()),
  getDetailId: () => dispatch(getDetailId()),
  getDetailImg: () => dispatch(getDetailImg()),
  getDetailCategory: () => dispatch(getDetailCategory()),
  getDetailPrice: () => dispatch(getDetailPrice()),
  getDetailDescription: () => dispatch(getDetailDescription()),
  getDetailComments: () => dispatch(getDetailComments()),
  getCommentsContext: () => dispatch(getCommentsContext()),
  getCommentsId: () => dispatch(getCommentsId()),
  getCommentsRating: () => dispatch(getCommentsRating()),
  getCommentsAuthor: () => dispatch(getCommentsAuthor()),
  getCommentsAuthorId: () => dispatch(getCommentsAuthorId()),
  getCommentsAuthorName: () => dispatch(getCommentsAuthorName()),
  detailUnmount: () => dispatch(detailUnmount()),
});

export default connect(mapStateToProp, mapDispatchToProp)(MenuDetailContainer);