import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./core/context/CartContext.jsx";
import { ThemeProvider } from "./core/context/ThemeContext.jsx";
import Root from "./core/routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
        <Root />
      </CartProvider>
    </ThemeProvider>
    <ToastContainer />
  </React.StrictMode>
);
