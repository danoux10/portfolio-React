// src/composant/themeProvider.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark-mode'); // ou 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
      // console.log(`Theme changed to: ${newTheme}`); // Log du changement de thème
      return newTheme;
    });
  };

  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme} id={'body'}> {/* Appliquer la classe de thème ici */}
          {children}
        </div>
      </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};