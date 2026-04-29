import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ setTheme, theme }) => {
  let iconSize = 16;
  let iconStroke = 2;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = (
    <>
      <li onClick={closeMenu}>
        <span>01. </span>About
      </li>
      <li onClick={closeMenu}>
        <span>02. </span>Projects
      </li>
      <li onClick={closeMenu}>
        <span>03. </span>Experiences
      </li>
      <li onClick={closeMenu}>
        <span>04. </span>Contact
      </li>
    </>
  );

  return (
    <nav>
      <span className="dev-icon">~/dev</span>
      
      {/* Desktop Links */}
      <ul className="desktop-links links">
        {navLinks}
      </ul>

      {/* Mobile Overlay */}
      <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
        <ul className="links">
          {navLinks}
        </ul>
        <button className="close-btn" onClick={closeMenu}>
          <X size={36} strokeWidth={2} />
        </button>
      </div>

      <div className="nav-actions">
        <span
          className="toggle-theme"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon size={iconSize} strokeWidth={iconStroke} />
          ) : (
            <Sun size={iconSize} strokeWidth={iconStroke} />
          )}
        </span>
        <button className="hamburger-btn" onClick={toggleMenu}>
          <Menu size={28} strokeWidth={2} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
