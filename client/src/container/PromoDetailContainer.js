import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail, getDetailName, getDetailId, getDetailImg, getDetailPrice, getDetailDescription, detailUnmount } from '../actions/detailActions';
import PromoDetail from '../component/PromoDetail';

class PromoDetailContainer extends Component {

  componentDidMount() {
    this.getDetail();
  }
  componentWillUnmount() {
    const {detailUnmount} = this.props;
    detailUnmount();
  }
  getDetail = async () => {
    const { fetchDetail, getDetailName, getDetailId, getDetailImg, getDetailPrice, getDetailDescription } = this.props;
    const url = this.props.location.pathname;
    await fetchDetail(url);
    getDetailName();
    getDetailId();
    getDetailImg();
    getDetailPrice();
    getDetailDescription();
  }

  render() {
    const { name, img, description, price } = this.props;
    return (
      <PromoDetail
        name={name}
        img={img}
        description={description}
        price={price}
      />
    );
  }
}
const mapStateToProp = state => ({
  fetchDetailSuccess: state.fetchDetailSuccess,
  fetchDetailFailed: state.fetchDetailFailed,
  name: state.detailName,
  id: state.detailId,
  img: state.detailImg,
  price: state.detailPrice,
  description: state.detailDescription
});

const mapDispatchToProp = dispatch => ({
  fetchDetail: url => dispatch(fetchDetail(url)),
  getDetailName: () => dispatch(getDetailName()),
  getDetailId: () => dispatch(getDetailId()),
  getDetailImg: () => dispatch(getDetailImg()),
  getDetailPrice: () => dispatch(getDetailPrice()),
  getDetailDescription: () => dispatch(getDetailDescription()),
  detailUnmount: () => dispatch(detailUnmount())
});

export default connect(mapStateToProp, mapDispatchToProp)(PromoDetailContainer);