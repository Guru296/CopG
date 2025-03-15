import React from "react";
import "../styles/Header.css"; // Ensure correct import path

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">🛡️</span> {/* Security Shield Icon */}
        <span className="logo-text">Cops<span className="highlight">Gate</span></span>
      </div>
    </header>
  );
};

export default Header;
