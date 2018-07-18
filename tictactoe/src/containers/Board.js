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
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    let key = -1;
    const tileElements = this.state.boardState.map((row) =>
      <tr key={key + 9}>
        {row.map((tileState) => {
          key++
          return (<Tile index={key} key={key} tileState={tileState} handleClick={this.handleClick} />)
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

  handleClick(event) {
    const newGameState = this.state.boardState
    const index = parseInt(event.target.getAttribute('index'), 10)
    const row = Math.floor(index / 3)
    const col = index % 3
    console.log(row);
    console.log(col);
    console.log(event.target.getAttribute('index'));

    newGameState[row][col] = 'X'
    this.setState({ boardState: newGameState })
  }
}
export default Board;