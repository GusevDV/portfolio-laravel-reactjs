import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Link} from 'react-router-dom'
import Axios from 'axios';

import Posts from './Posts';
import Header from './Header';

class App extends Component {

  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route path='/' component={Posts} />
        </Switch>
      </div>
    );
  }

}

export default App;
