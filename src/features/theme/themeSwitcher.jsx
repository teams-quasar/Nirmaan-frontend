// src/features/theme/ThemeSwitcher.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../store/themeSlice';

const ThemeSwitcher = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="w-12 h-12 bg-gray-200 p-1 dark:bg-gray-800 rounded-full text-2xl"
    >
      {darkMode ? '☀️' : '🌑'}
    </button>
  );
};

export default ThemeSwitcher;
