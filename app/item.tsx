import React, { ReactNode, FC, useContext, useState } from 'react';
import { DarkModeProvider, DarkModeContext } from './dark-mode-context';

export const Item: FC<{ num: number }> = ({ num }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <DarkModeProvider>
      <div className={darkMode ? 'dark item' : 'item'}>
        Item
        <button onClick={toggleDarkMode}>toggle dark mode</button>
        {num > 0 && <Item num={num - 1} />}
      </div>
    </DarkModeProvider>
  );
};
