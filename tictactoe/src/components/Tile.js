import React from 'react';

class Tile extends React.Component {

  render() {

    return (
      <td index={this.props.index} className='tile' onClick={this.props.handleClick}>{this.props.tileState}</td>
    )
  }
}

export default Tile;