import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Landing from "./Pages/Landing";
import Category from "./Pages/Category";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  </BrowserRouter>
);
