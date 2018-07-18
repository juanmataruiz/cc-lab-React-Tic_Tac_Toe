import React from 'react';
import Board from './Board.js';
import GameInfo from '../components/GameInfo.js'
import Reset from '../components/Reset.js';

class GameContainer extends React.Component {

  render() {
    return (
      <div className='game-container'>
        <Board />
        <GameInfo />
        <Reset />
      </div>
    )
  }

}

export default GameContainer;