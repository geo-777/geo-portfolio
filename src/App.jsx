import { useState } from "react";
import "./styles/theme.css";
import "./styles/app.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return <div className={theme}></div>;
};

export default App;
