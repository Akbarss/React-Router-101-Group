import React from "react";

const Card = ({ bgColor, children }) => {
  const cardStyle = {
    backgroundColor: bgColor, // Используем переданный цвет фона
    padding: "20px",
    borderRadius: "10px",
    color: "#fff",
    textAlign: "center",
    marginBottom: "10px",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
