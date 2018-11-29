import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Navbar.css';

class NavList extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollTo: '' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const isHome = this.props.location.pathname === '/';
    !isHome && this.props.history.push('/');
    this.setState({ scrollTo: e.target.id.split('-')[1] });
  }
  componentDidUpdate() {
    const isHome = this.props.location.pathname === '/';
    (isHome && this.state.scrollTo) ? (
      document.getElementById(this.state.scrollTo).scrollIntoView({ block: "start", behavior: "smooth" })
    ) : (
        window.scrollTo(0, 0)
      )
  }
  render() {
    return (
        <div className='Navlist'>
          <div className='link' id='logo' onClick={this.handleClick}></div>
          <div className='link' id='to-aboutus' onClick={this.handleClick}>About us</div>
          | <div><Link to='/promotions' className='link'>Promotions</Link></div>
          | <div><Link to='/menu' className='link'>Menu</Link></div>
          | <div><Link to='/staffs' className='link'>Staffs</Link></div>
          | <div><Link to='/favorites' className='link'>Favorites</Link></div>
        </div>
    );
  }
}

export default withRouter(NavList);