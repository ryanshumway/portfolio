import React from 'react';
import { Sun, Moon } from 'phosphor-react';
import { ThemeToggleButton } from './ThemeToggle.styles';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ThemeToggleButton 
      onClick={toggleTheme}
      className={isDarkMode ? 'dark' : ''}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? (
        <Sun size={24} weight="regular" />
      ) : (
        <Moon size={24} weight="regular" />
      )}
    </ThemeToggleButton>
  );
};

export default ThemeToggle; 