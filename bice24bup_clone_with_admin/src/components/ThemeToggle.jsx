import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('site-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('site-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <div className="theme-toggle">
      <button onClick={() => setDark(!dark)} className="btn small">
        {dark ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}
