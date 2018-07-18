import React from 'react';

class GameInfo extends React.Component {

  render() {
    let element = <p>Current Player: {this.props.currentPlayer}</p>
    if (this.props.winner) element = <p>The winner is: {this.props.winner}</p>
    return (
      <div>
        {element}
      </div>
    )
  }
}

export default GameInfo;