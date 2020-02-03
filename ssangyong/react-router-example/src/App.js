import React, { Component } from 'react';
import Header from './Header';
import BoxOffice from './BoxOffice';
import Reserve from './Reserve';
import Online from './Online';
import Seat from './Seat'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';//하나의 패키지 안에 여러개가 있을경우 

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={BoxOffice} />
            {/* <Route exact path="/boxoffice" component={BoxOffice} /> */}
            <Route exact path="/seat" component={Seat} />
            <Route exact path="/online" component={Online} />
            <Route exact path="/reserve" component={Reserve} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;