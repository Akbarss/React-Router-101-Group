import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Test from "../page/Test";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
