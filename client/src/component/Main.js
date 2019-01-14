import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from '../container/HomeContainer';
import MenuContainer from '../container/MenuContainer';
import MenuDetailContainer from '../container/MenuDetailContainer';
import StaffsContainer from '../container/StaffsContainer';
import StaffDetailContainer from '../container/StaffDetailContainer';
import PromosContainer from '../container/PromosContainer';
import PromoDetailContainer from '../container/PromoDetailContainer';
import FavoritelistContainer from '../container/FavoritelistContainer';
import RegisterContainer from '../container/RegisterContainer';
import MeContainer from '../container/MeContainer';
import UserslistContainer from '../container/UserslistContainer';

class Main extends Component {
  render() {
    return (
      <main className='Main' style={{ marginTop: 64 }}>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/menu' component={MenuContainer} />
        <Route path='/menu/:dishId' component={MenuDetailContainer} />
        <Route exact path='/staffs' component={StaffsContainer} />
        <Route path='/staffs/:staffId' component={StaffDetailContainer} />
        <Route path='/register' component={RegisterContainer} />
        <Route exact path='/promos' component={PromosContainer} />
        <Route path='/promos/:promoId' component={PromoDetailContainer} />
        <Route exact path='/favoritelist' component={FavoritelistContainer} />
        <Route path='/me' component={MeContainer} />
        <Route path='/userslist' component={UserslistContainer} />
      </main>
    );
  }
}

export default Main;
