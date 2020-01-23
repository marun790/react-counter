import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = id => {
    console.log('parent -> delete', this.state);
    let counter = this.state.counter.filter(count => count.id !== id);
    this.setState({ counter });
  };

  render() {
    return (
      <div>
        {this.state.counter.map(count => (
          <Counter
            key={count.id}
            onDelete={this.handleDelete}
            counter={count}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
