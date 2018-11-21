import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import Menu from './Menu.js';
import Staffs from './Staffs.js';
import Register from './Register.js';
import Promotions from './Promotions.js';

class Main extends Component {
  render(){
    return (
     <main>
       <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/staffs' component={Staffs} />
          <Route path='/register' component={Register} />
          <Route path='/promotions' component={Promotions} />
       </Switch>
      </main>
    );
  }
}

export default Main;
