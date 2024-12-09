import React from "react";
import { useCart } from "../../core/context/CartContext";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div style={{ padding: "16px", marginTop: "20px", borderTop: "1px solid #ccc" }}>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
