import "./ThemeToggle.css";

export const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className={`theme-toggle ${darkMode ? "dark" : "light"}`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <i className={darkMode ? "fa-regular fa-sun" : "fa-regular fa-moon"}></i>
    </div>
  );
};
