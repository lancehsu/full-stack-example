import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

class Staffs extends Component {
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
    return (
      <div className='Staffs'>
        <div className='title'>
          <h1>Staffs</h1>
        </div>
        <div className='container'>
          {names.map((name, i) => {
            return (
              <div className='item' key={id[i]}>
                <div className='item-img-container'>
                  <Link to={`/staffs/${id[i]}`}>
                    <img className='item-img' src={imgs[i]} onError={(e) => { e.target.onerror = null; e.target.src = fallbackImg }} alt='img break' />
                  </Link>
                </div>
                <div className='item-name'>
                  <div>{name}</div>
                  <div>{abbr[i]}</div>
                </div>
              </div>
            );
          })
        }
        </div>

      </div>
    );
  }
}

export default Staffs;