import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../page/About";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
