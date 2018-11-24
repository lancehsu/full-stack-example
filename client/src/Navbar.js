import React, { Component } from 'react';
import './Navbar.css';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
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
    (isHome && this.state.scrollTo)? (
      document.getElementById(this.state.scrollTo).scrollIntoView({block: "start", behavior: "smooth"})
    ) : (
      window.scrollTo(0,0)
    )
    }
  render() {
    return (
      <nav class='Navbar'>
        <div class='linkPart'>
          <div class='link' id='logo' onClick={this.handleClick}></div>
          <div class='link' id='to-aboutus' onClick={this.handleClick}>About us</div>
          | <div><Link to='/promotions' class='link'>Promotions</Link></div>
          | <div><Link to='/menu' class='link'>Menu</Link></div>
          | <div><Link to='/staffs' class='link'>Staffs</Link></div>
        </div>
        <div id='userPart'>
          <div>Accout: <input type='text'></input></div>
          <div id='p-and-sr'>
            <div>Password: <input type='text'></input></div>
            <div>
              <div><input type='submit' value='Log in'></input></div>
              <div><Link to='/register' class='register'>Register</Link></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

}

export default withRouter(Navbar);