import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import Weather from './components/Weather';
const Routes = (
    <Router basename="/WeaterApp">
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/weather" component={Weather}/>
       
      </div>
    </Router>
  );
  
  export default Routes;