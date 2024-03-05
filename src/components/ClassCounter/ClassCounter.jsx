import * as React from 'react';
import cl from '../../assets/main.module.scss';

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decrement = () => {
    if (this.state.count < 1) return;
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className={cl.counter}>
        <div className={cl.count__block}>
          <h3>{this.state.count}</h3>
        </div>
        <button type='button' onClick={this.Increment}>
          Increment
        </button>
        <button type='button' onClick={this.Decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export { ClassCounter };
