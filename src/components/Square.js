import React, {Component} from 'react';

class Square extends Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
