import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ backgroundColor: "black", width: "100%", padding: 3 }}>
      <div style={{ display: "flex", gap: 20, justifyContent: "center", color: "#fff" }}>
        <NavLink to={"/"} style={{ color: "#fff" }}>
          Home
        </NavLink>
        <NavLink to={"/about"} style={{ color: "#fff" }}>
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
