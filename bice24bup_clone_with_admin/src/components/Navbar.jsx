import React from 'react';

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <div className="brand">
          <img src="/logo192.png" alt="logo" className="logo" />
          <span className="brand-text">BICE 2024</span>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#courses">Semester Content</a>
          <a href="#notice">Notice</a>
          <a href="#about">About</a>
        </nav>

        <div className="cta">
          <button className="btn primary">UCAM LOGIN</button>
        </div>
      </div>
    </header>
  );
}
