import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = id => {
    console.log('parent -> delete', this.state);
    let counters = this.state.counters.filter(count => count.id !== id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleClickIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    //should not update the state directly -> this is a big NO NO
    // counters[0].value++;
    // console.log(this.state.counters[0]);

    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm mr2"
          onClick={() => this.handleReset()}
        >
          Reset
        </button>
        {this.state.counters.map(count => (
          <Counter
            key={count.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleClickIncrement}
            counter={count}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
