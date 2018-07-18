import React from 'react';

class Tile extends React.Component {

  render() {
    const handler = this.props.tileState === '' ? this.props.handleClick : () => null
    return (
      <td index={this.props.index} className='tile' onClick={handler}>{this.props.tileState}</td>
    )
  }
}

export default Tile;