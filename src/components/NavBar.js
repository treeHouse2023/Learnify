import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <button className="hamburger-btn" onClick={toggleMenu}>
        <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
      </button>

      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      <nav className={`sidebar ${isOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={closeMenu}></button>

        {/* Nav Links */}
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              Search Question Papers
            </Link>
          </li>
          <li>
            <Link to="/sharing" onClick={closeMenu}>
              Upload Question Papers
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/guidelinespage" onClick={closeMenu}>
              Guidelines
            </Link>
          </li>
          <li>
            <Link to="/about-creator" onClick={closeMenu}>
              About Creator
            </Link>
          </li>
        </ul>

        {/* Learnify Branding */}
        <div className="nav-brand-bottom">
          <h2>Learnify</h2>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
