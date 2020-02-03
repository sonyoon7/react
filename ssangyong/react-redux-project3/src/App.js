import React, { Component } from 'react';
import Menu from './components/Menu';
import MovieView from './components/MovieView';

class App extends Component {

  render() {
    return (
      <div>
        <Menu store={this.props.store} />
        <MovieView store={this.props.store} />
      </div>
    );
  }
}

export default App;