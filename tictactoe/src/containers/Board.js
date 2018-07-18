import React from 'react';
import Tile from '../components/Tile';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      boardState: [
        ["", "X", ""],
        ["P", "", ""],
        ["", "", "O"]
      ]
    }
  }

  render() {
    let key = 0;
    const tileElements = this.state.boardState.map((row) =>
      <tr>
        {row.map((tileState) => {
          key++
          return (<Tile key={key} tileState={tileState} />)
        })}
      </tr>

    )

    return (
      <table>
        <tbody>
          {tileElements}
        </tbody>
      </table>
    )
  }
}
export default Board;