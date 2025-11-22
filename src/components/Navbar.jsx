import { ThemeToggle } from "./ThemeToggle";
import "./Navbar.css";

export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <img src="/logo.svg" alt="logo" />
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  );
};
