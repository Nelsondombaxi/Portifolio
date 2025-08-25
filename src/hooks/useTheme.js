import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, setTheme };
}

export default useTheme;