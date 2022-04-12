import React, { useContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { GameContext } from '../contexts/GameContext';
import calculateWinner from '../utils/calculateWinner';

import Square from './Square';
import Player from './Player';
import Reset from './Reset';
import Winner from './Winner';
import History from './History';

export default function Board() {
  const {
    state: { squares, history },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) {
      dispatch({ type: 'UPDATE_WINNER', payload: winner });
    }
  }, [squares, history, dispatch]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuid()} />
        ))}
      </div>

      <History />
    </div>
  );
}
