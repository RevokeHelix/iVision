import React from "react";
import ReactDOM from "react-dom/client";
import ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { Products } from "./screens/Products";
import { ContactUs } from "./screens/ContactUs";
import { About } from "./screens/About";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />}>
          </Route>
          <Route path="/products" element={<Products />}>
          </Route>
          <Route path="/contactus" element={<ContactUs />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const app = document.getElementById("app");
  const root = ReactDOM.createRoot(app);
  root.render(<App />);
