import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#ffffff" : "#333333";
    document.body.style.color = theme === "light" ? "#000000" : "#ffffff";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
