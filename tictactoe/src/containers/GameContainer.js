import React from 'react';
import Board from './Board.js';
import GameInfo from '../components/GameInfo.js'
import Reset from '../components/Reset.js';

class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boardState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      currentPlayer: 'X'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handlReset = this.handlReset.bind(this)
  }
  render() {
    return (
      <div className='game-container'>
        <Board handleClick={this.handleClick} boardState={this.state.boardState} />
        <GameInfo currentPlayer={this.state.currentPlayer} />
        <Reset handlReset={this.handlReset} />
      </div>
    )
  }

  handleClick(event) {
    const newGameState = this.state.boardState
    const index = parseInt(event.target.getAttribute('index'), 10)
    const row = Math.floor(index / 3)
    const col = index % 3

    newGameState[row][col] = this.state.currentPlayer
    this.setState({
      boardState: newGameState,
      currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X'
    })
  }

  handlReset(event) {
    const newGameState = this.state.boardState.map((row) => row.map((element) => ""))
    this.setState({ boardState: newGameState, currentPlayer: "X" })

  }

}

export default GameContainer;