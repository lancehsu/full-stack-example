import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from '../container/HomeContainer';
import MenuContainer from '../container/MenuContainer';
import MenuDetailContainer from '../container/MenuDetailContainer';
import StaffsContainer from '../container/StaffsContainer';
import StaffDetailContainer from '../container/StaffDetailContainer';
import PromotionsContainer from '../container/PromotionsContainer';
import PromoDetailContainer from '../container/PromoDetailContainer';
import FavoritesContainer from '../container/FavoritesContainer';
import RegisterContainer from '../container/RegisterContainer';
import MeContainer from '../container/MeContainer';
import UsersContainer from '../container/UsersContainer';

class Main extends Component {
  render() {
    return (
      <main style={{ marginTop: 64 }}>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/menu' component={MenuContainer} />
        <Route path='/menu/:dishId' component={MenuDetailContainer} />
        <Route exact path='/staffs' component={StaffsContainer} />
        <Route path='/staffs/:staffId' component={StaffDetailContainer} />
        <Route path='/register' component={RegisterContainer} />
        <Route exact path='/promotions' component={PromotionsContainer} />
        <Route path='/promotions/:promoId' component={PromoDetailContainer} />
        <Route exact path='/favorites' component={FavoritesContainer} />
        <Route path='/me' component={MeContainer} />
        <Route path='/users' component={UsersContainer} />
      </main>
    );
  }
}

export default Main;
