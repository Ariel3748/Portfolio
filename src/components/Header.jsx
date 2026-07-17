import Icon from "./Icon";
import { useTheme } from "../context/ThemeContext";
import { BrightnessHigh, Moon } from "react-bootstrap-icons";

export default function Header({ name }) {
  const { theme, toggleTheme } = useTheme();

  const firstName = name?.split(" ")[0] || "portfolio";

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="logo">
          {firstName} Portfolio
          <span>.</span>
        </a>

        <nav className="nav" aria-label="Navegación principal">
          <a href="#about">$ about</a>
          <a href="#projects">$ projects</a>
          <a href="#contact">$ contact</a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {theme === "dark" ? <BrightnessHigh size={16}/> : <Moon size={16}/>}

            {/*<Icon name={theme === "dark" ? "sun-fill" : "moon-stars-fill"} />*/}
          </button>
        </div>
      </div>
    </header>
  );
}
