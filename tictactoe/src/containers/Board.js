import React from 'react';
import Tile from '../components/Tile';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      boardState: [
        ["", "X", ""],
        ["", "", ""],
        ["", "", "O"]
      ]
    }
  }

  render() {
    let key = 0;
    const tileElements = this.state.boardState.map((row) =>
      row.map((tileState) => {
        key++
        return (<Tile key={key} tileState={tileState} />)
      }))

    return (
      <div>
        {tileElements}
      </div>
    )
  }
}
export default Board;