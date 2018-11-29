import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.js';
import Menu from './Menu.js';
import Staffs from './Staffs.js';
import Promotions from './Promotions.js';
import Detail from './Detail.js';
import Favorites from './Favorites.js';
import Register from './Register.js';

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
     </main>
    );
  }
}

export default Main;
