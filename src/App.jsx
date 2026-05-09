import { useState, useEffect } from "react";
import "./styles/app.css";
import "./styles/theme.css";
import Navbar from "./components/Navbar";
import ParticleField from "./components/ParticleField";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import About from "./components/About";
const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <ParticleField />
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
      <About />
      <ContactUs />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
