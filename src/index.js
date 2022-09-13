import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Landing from "./Pages/LandingPage";
import Category from "./Pages/CategoryPage";
import Bookmark from "./Pages/BookmarkPage";
import Login from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";

// import styles
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/category" element={<Category />} />
      <Route path="/bookmark" element={<Bookmark />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
