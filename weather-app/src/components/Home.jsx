import React,{Component} from 'react';
import Weather from './Weather'


class Home extends Component {
  render(){
    return(
        <div>
      <h2>This is the home page</h2>
      <Weather/>
      </div>
    )
  };
}
export default Home;