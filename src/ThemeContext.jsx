import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setIsDark(stored === 'dark');
    } else {
      const isSysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(isSysDark);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      // Set CSS variables for explicit dark mode branding (GitHub like)
      root.style.setProperty('--color-bg', '#0d1117');
      root.style.setProperty('--color-card', '#161b22');
      root.style.setProperty('--color-text', '#e6edf3');
      root.style.setProperty('--color-accent', '#58a6ff');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      root.style.removeProperty('--color-bg');
      root.style.removeProperty('--color-card');
      root.style.removeProperty('--color-text');
      root.style.removeProperty('--color-accent');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export { ThemeContext };
