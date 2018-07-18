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
      currentPlayer: 'X',
      winner: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.handlReset = this.handlReset.bind(this)
  }
  render() {
    return (
      <div className='game-container'>
        <Board handleClick={this.handleClick} boardState={this.state.boardState} />
        <GameInfo currentPlayer={this.state.currentPlayer} winner={this.state.winner} />
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
    let currentPlayer = this.state.currentPlayer === 'X' ? 'O' : 'X'
    const winner = this.checkWinner()
    console.log(winner);

    if (winner) currentPlayer = ''

    this.setState({
      boardState: newGameState,
      currentPlayer: currentPlayer,
      winner: winner
    })
  }

  checkWinner() {
    //check rows
    for (let row of this.state.boardState) {
      if (row[0] != '' && row[0] === row[1] && row[1] === row[2]) return row[0]
    }

    const state = this.state.boardState
    //check columns
    for (let i = 0; i < 3; i++) {

      if (state[0][i] != '' && state[0][i] === state[1][i] && state[2][i]) return state[0][i];
    }

    //check diagonals
    if (state[0][0] != '' && state[0][0] === state[1][1] && state[1][1] === state[2][2]) return state[0][0]
    if (state[2][0] != '' && state[2][0] === state[1][1] && state[1][1] === state[0][2]) return state[2][0]


    return null;

  }

  handlReset(event) {
    const newGameState = this.state.boardState.map((row) => row.map((element) => ""))
    this.setState({ boardState: newGameState, currentPlayer: "X", winner: null })
  }

}

export default GameContainer;