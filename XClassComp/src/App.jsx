import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <>
        <h1>Counter</h1>

        <h2>Count is: {this.state.count}</h2>

        <button onClick={this.increment}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>
      </>
    );
  }
}

export default Counter;