import React from 'react';
import Tile from '../components/Tile';

class Board extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      boardState: [
        ["O", "", ""],
        ["", "O", ""],
        ["", "", "O"]
      ]
    }
  }

  render() {
    let key = 1;
    const tileElements = this.state.boardState.map((row) =>
      <tr key={key + 10}>
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