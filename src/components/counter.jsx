import React, { Component } from 'react';

class Counter extends Component {
  style = {
    fontSize: 10,
    fontWeight: 'bold'
  };

  state = {
    value: this.props.counter.value
  };

  handleClickIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleClickIncrement}
          className="btn btn-secondary btn-sm mr-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm mr-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
