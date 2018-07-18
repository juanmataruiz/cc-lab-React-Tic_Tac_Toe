import React from 'react';

class Reset extends React.Component {

  render() {
    return (
      <button onClick={this.props.handlReset}>Reset</button>
    )
  }
}
export default Reset;