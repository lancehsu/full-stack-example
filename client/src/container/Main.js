import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './HomeContainer';
import Menu from './MenuContainer';
import Staffs from './StaffsContainer';
import Promotions from './PromotionsContainer';
import Detail from './DetailContainer';
import Favorites from './FavoritesContainer';
import Register from './RegisterContainer';
import Me from './MeContainer';

class Main extends Component {
  render() {
    return (
      <main>
          <Route exact path='/' component={Home}/>
          <Route exact path='/menu' component={Menu} />
          <Route path='/menu/:dishId' component={Detail} />
          <Route exact path='/staffs' component={Staffs} />
          <Route path='/staffs/:staffId' component={Detail} />
          <Route path='/register' component={Register} />
          <Route exact path='/promotions' component={Promotions} />
          <Route path='/promotions/:promoId' component={Detail} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/me' component={Me} />
     </main>
    );
  }
}

export default Main;
