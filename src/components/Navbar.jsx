import { Sun, Moon } from "lucide-react";

const Navbar = ({ setTheme, theme }) => {
  let iconSize = 16;
  let iconStroke = 2;
  return (
    <nav>
      <span className="dev-icon">~/dev</span>
      <ul className="links">
        <li>
          <span>01. </span>About
        </li>
        <li>
          <span>02. </span>Projects
        </li>
        <li>
          <span>03. </span>Experiences
        </li>
        <li>
          <span>04. </span>Contact
        </li>
      </ul>
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
    </nav>
  );
};

export default Navbar;
