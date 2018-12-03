import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NavList from '../component/NavList';

class NavListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { scrollTo: '' };
  }
  handleClick = (e) => {
    const isHome = this.props.location.pathname === '/';
    !isHome && this.props.history.push('/');
    const scrollTo = e.target.id.split('-')[1];
    this.setState({ scrollTo });

  }
  componentDidUpdate() {

    const isHome = this.props.location.pathname === '/';
    const { scrollTo } = this.state;
    (isHome && scrollTo) ? (
      document.getElementById(scrollTo).scrollIntoView({ block: 'start', behavior: 'smooth' })
    ) : (
        window.scrollTo(0, 0)
      )
  }
  render() {
    const handleClick = this.handleClick;
    return <NavList handleClick={handleClick} />;
  }
}

export default withRouter(NavListContainer);