import React, {Component} from 'react';
import { observer } from 'mobx-react';

@observer
class Home extends Component {
  render(){
    return(
      <h1>Hello</h1>
    )
  }
}

export default Home;
