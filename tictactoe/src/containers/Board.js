import React from 'react';
import Tile from '../components/Tile';

class Board extends React.Component {


  render() {
    let key = -1;
    const tileElements = this.props.boardState.map((row) =>
      <tr key={key + 9}>
        {row.map((tileState) => {
          key++
          return (<Tile index={key} key={key} tileState={tileState} handleClick={this.props.handleClick} />)
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