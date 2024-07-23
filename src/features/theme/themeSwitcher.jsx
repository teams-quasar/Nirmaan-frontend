// src/features/theme/ThemeSwitcher.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './themeSlice';

const ThemeSwitcher = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
    >
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;
