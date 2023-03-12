import React, { ReactNode, FC, useContext, useState } from 'react';

export const DarkModeContext = React.createContext<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}>({ darkMode: false, toggleDarkMode: () => {} });

export const DarkModeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
