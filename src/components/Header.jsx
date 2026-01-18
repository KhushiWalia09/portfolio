import { useState } from "react";
import "./Header.css";

function Header({ toggleTheme, theme }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <h2 className="logo">
        <span className="text-gradient">Khushi's Portfolio</span>
      </h2>


      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
        <a href="#about" data-link="about" onClick={closeMenu}>
          About
        </a>
        <a href="#experience" data-link="experience" onClick={closeMenu}>
          Experience
        </a>
        <a href="#achievements" data-link="achievements" onClick={closeMenu}>
          Achievements
        </a>
        <a href="#skills" data-link="skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#projects" data-link="projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" data-link="contact" onClick={closeMenu}>
          Contact
        </a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>

    </header>
  );
}
export default Header;
