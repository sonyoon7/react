import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieDetail from './components/MovieDetail';
import MovieReleased from './components/MovieReleased';
import MovieScheduled from './components/MovieScheduled';
import MovieSearch from './components/MovieSearch';
import News from './components/News';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoxOffice from './components/BoxOffice';
class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Header />
          <div style={{ "height": "50px" }}></div>
          <Switch>
            <Route exact path="/" component={MovieReleased} />
            <Route path="/schedule" component={MovieScheduled} />
            <Route path="/boxoffice" component={BoxOffice} />
            <Route path="/news" component={News} />
            <Route path="/detail/:mno" component={MovieDetail} />
            <Route path="/find" component={MovieSearch} />
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;