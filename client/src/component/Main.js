import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
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
        <Switch>
          
          <Route path='/menu/:dishId' component={MenuDetailContainer} />
          <Route path='/menu' component={MenuContainer} />
          <Route path='/staffs/:staffId' component={StaffDetailContainer} />
          <Route path='/staffs' component={StaffsContainer} />
          <Route path='/register' component={RegisterContainer} />
          <Route path='/promos/:promoId' component={PromoDetailContainer} />
          <Route path='/promos' component={PromosContainer} />
          <Route path='/favoritelist' component={FavoritelistContainer} />
          <Route path='/me' component={MeContainer} />
          <Route path='/userslist' component={UserslistContainer} />
          <Route path='/' component={HomeContainer} />
        </Switch>
      </main>
    );
  }
}

export default Main;
