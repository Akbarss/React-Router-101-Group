import React from "react";

const CardImg = ({ imageUrl, title, description }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    overflow: "hidden",
    width: "300px",
    margin: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "15px",
    textAlign: "center",
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <div style={contentStyle}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardImg;
