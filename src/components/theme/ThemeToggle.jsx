import React, { useContext } from "react";
import { ThemeContext } from "../../core/context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#007BFF",
        color: "#FFFFFF",
        border: "none",
        borderRadius: "5px",
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
