import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Landing from "./Pages/Landing";
import Category from "./Pages/Category";
import Bookmark from "./Pages/Bookmark";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/category" element={<Category />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
  </BrowserRouter>
);
