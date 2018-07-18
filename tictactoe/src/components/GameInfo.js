import React from 'react';

class GameInfo extends React.Component {

  render() {
    return (
      <p>Current Player: {this.props.currentPlayer}</p>
    )
  }
}

export default GameInfo;