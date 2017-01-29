import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import AppNavigator from './AppNavigator.js'

class App extends Component {
  @autobind
  render(){
    return(
      <AppNavigator />
    )
  }

}

export default App;
