import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStaff, getStaffName, getStaffId, getStaffImg, getStaffAbbr } from '../actions/staffActions';
import Staffs from '../component/Staffs';

class StaffsContainer extends Component {
  componentDidMount() {
    this.getStaffs();
  }
  getStaffs = async () => {
    try {
      const { fetchStaff, getStaffName, getStaffId, getStaffImg, getStaffAbbr } = this.props;
      await fetchStaff();
      getStaffName();
      getStaffId();
      getStaffImg();
      getStaffAbbr();
    } catch (err) {
      console.error(this.props.fetchStaffFailed || err);
    }
  }
  render() {
    const { ids, names, abbrs, imgs } = this.props;
    return <Staffs ids={ids} names={names} abbrs={abbrs} imgs={imgs} />;
  }
}
const mapStateToProp = state => ({
  staffData: state.staffData,
  names: state.staffName,
  ids: state.staffId,
  imgs: state.staffImg,
  abbrs: state.staffAbbr
});

const mapDispatchToProp = dispatch => ({
  fetchStaff: () => dispatch(fetchStaff()),
  getStaffName: () => dispatch(getStaffName()),
  getStaffId: () => dispatch(getStaffId()),
  getStaffImg: () => dispatch(getStaffImg()),
  getStaffAbbr: () => dispatch(getStaffAbbr()),
});

export default connect(mapStateToProp, mapDispatchToProp)(StaffsContainer);