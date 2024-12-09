import React from "react";
import { useCart } from "../../core/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px", borderRadius: "8px" }}>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "10px 20px",
          fontSize: "14px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
