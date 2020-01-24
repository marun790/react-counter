import React, { Component } from 'react';

class Counter extends Component {
  style = {
    fontSize: 10,
    fontWeight: 'bold'
  };

  render() {
    return (
      <div>
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
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
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
