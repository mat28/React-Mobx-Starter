import React, {Component} from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { observer } from 'mobx-react';
import Home from './home/home.js';
import noMatch from './noMatch/noMatch.js';

@observer
class AppNavigator extends Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
        </Route>
      </Router>
    )
  }
}

export default AppNavigator;
