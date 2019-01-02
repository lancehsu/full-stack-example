import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPromo, getPromoId, getPromoImg, getPromoName } from '../actions/promoActions';
import Promos from '../component/Promos';

class PromosContainer extends Component {
  componentDidMount() {
    this.getPromos();
  }
  getPromos = async () => {
    try {
      const { fetchPromo, getPromoName, getPromoImg, getPromoId } = this.props;
      await fetchPromo();
      getPromoName();
      getPromoId();
      getPromoImg();
    } catch (err) {
      console.error(this.props.fetchPromo || err);
    }
  }
  render() {
    const { ids, name, imgs } = this.props;
    return <Promos ids={ids} names={name} imgs={imgs} />;
  }
}

const mapStateToProp = state => ({
  promoData: state.promoData,
  name: state.promoName,
  ids: state.promoId,
  imgs: state.promoImg,
});

const mapDispatchToProp = dispatch => ({
  fetchPromo: () => dispatch(fetchPromo()),
  getPromoName: () => dispatch(getPromoName()),
  getPromoId: () => dispatch(getPromoId()),
  getPromoImg: () => dispatch(getPromoImg()),
});

export default connect(mapStateToProp, mapDispatchToProp)(PromosContainer);