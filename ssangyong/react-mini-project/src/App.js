import React, { Component } from 'react';
import Home from './components/movies/Home';
import Released from './components/movies/Released';
import Scheduled from './components/movies/Scheduled';
import BoxOffice from './components/movies/BoxOffice';
import News from './components/movies/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

//Main page
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/released"} component={Released} />
            <Route exact path={"/scheduled"} component={Scheduled} />
            <Route exact path={"/boxOffice"} component={BoxOffice} />
            <Route exact path={"/news"} component={News} />

          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;