import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Player() {
  // eslint-disable-next-line no-unused-vars
  const { isXNext } = useContext(GameContext);

  return <h1>Player: {isXNext ? 'X' : 'O'}</h1>;
}
