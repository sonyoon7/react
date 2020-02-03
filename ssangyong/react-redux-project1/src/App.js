import React, { Component } from 'react';
import Button from './components/Button';
import Option from './components/Option';
import Counter from './components/Counter';
import { runInThisContext } from 'vm';
// import from '';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      diff: 1
    }
    this.onChange = this.onChange.bind(this);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }
  onChange(diff) {
    this.setState({ diff: diff })
  }
  onIncrement() {
    this.setState({ value: this.state.value + Number(this.state.diff) })
  }
  onDecrement() {
    this.setState({ value: this.state.value - Number(this.state.diff) })
  }
  render() {
    return (
      <div className="container">
        <Counter value={this.state.value} />
        <Option diff={this.state.diff} onChange={this.onChange} />
        <Button onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
      </div>
    );
  }
}

export default App;