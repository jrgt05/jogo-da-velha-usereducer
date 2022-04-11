import React, { createContext, useState, useMemo } from 'react';
import t from 'prop-types';

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [whoIsWinner, setWhoIsWinner] = useState('');
  const [history, setHistory] = useState([]);

  const state = useMemo(
    () => ({
      squares,
      setSquares,
      isXNext,
      setIsXNext,
      whoIsWinner,
      setWhoIsWinner,
      history,
      setHistory,
    }),
    [squares, isXNext, whoIsWinner, history]
  );

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

GameContextProvider.propTypes = {
  children: t.node.isRequired,
};
