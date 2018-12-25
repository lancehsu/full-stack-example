import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDetail, getDetailName, getDetailImg, getDetailDescription, getDetailDesignation, detailUnmount } from '../actions/detailActions';
import StaffDetail from '../component/StaffDetail';

class StaffDetailContainer extends Component {

  componentDidMount() {
    this.getDetail();
  }
  componentWillUnmount() {
    const { detailUnmount } = this.props;
    detailUnmount();
  }
  getDetail = async () => {
    const { fetchDetail, getDetailName, getDetailImg, getDetailDescription, getDetailDesignation } = this.props;
    let url = this.props.location.pathname;
    url = url.replace('staffs', 'leaders');
    await fetchDetail(url);
    getDetailName();
    getDetailImg();
    getDetailDescription();
    getDetailDesignation();
  }

  render() {
    const { name, img, description, designation } = this.props;
    return (
      <StaffDetail
        name={name}
        designation={designation}
        img={img}
        description={description}
      />
    );
  }
}

const mapStateToProp = state => ({
  detailData: state.detailData,
  name: state.detailName,
  img: state.detailImg,
  description: state.detailDescription,
  designation: state.detailDesignation
});

const mapDispatchToProp = dispatch => ({
  fetchDetail: url => dispatch(fetchDetail(url)),
  getDetailName: () => dispatch(getDetailName()),
  getDetailImg: () => dispatch(getDetailImg()),
  getDetailDescription: () => dispatch(getDetailDescription()),
  getDetailDesignation: () => dispatch(getDetailDesignation()),
  detailUnmount: () => dispatch(detailUnmount())
});

export default connect(mapStateToProp, mapDispatchToProp)(StaffDetailContainer);