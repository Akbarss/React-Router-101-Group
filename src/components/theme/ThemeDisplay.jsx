import React, { useContext } from "react";
import { ThemeContext } from "../../core/context/ThemeContext";

const ThemeDisplay = () => {
  const { theme } = useContext(ThemeContext);

  return <h1>Current Theme: {theme}</h1>;
};

export default ThemeDisplay;
