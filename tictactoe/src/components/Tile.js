import React from 'react';

class Tile extends React.Component {

  render() {

    return (
      <div className='tile'>{this.props.tileState}</div>
    )
  }
}

export default Tile;