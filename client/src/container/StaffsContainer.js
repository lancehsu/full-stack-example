import React, { Component } from 'react';
import Staffs from '../component/Staffs';

class StaffsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { id: [], names: [], abbr: [], imgs: [], fallbackImg: '/images/empty-staff.jpg' };

  }
  componentDidMount() {
    this.getStaffs();
  }
  getStaffs = async () => {
    const response = await fetch('/leaders', { method: 'GET' });
    const data = await response.json();
    const names = data.map(e => e.name);
    const imgs = data.map(e => e.image);
    const id = data.map(e => e._id);
    const abbr = data.map(e => e.abbr);
    this.setState({ id, names, abbr, imgs });
  }
  render() {
    const { id, names, abbr, imgs, fallbackImg } = this.state;
    return <Staffs id={id} names={names} abbr={abbr} imgs={imgs} fallbackImg={fallbackImg} />;
        }
      }
export default StaffsContainer;