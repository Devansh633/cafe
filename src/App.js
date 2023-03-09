import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./home/home"
import Login from "./login"
import Signup from "./signup"
import Menu from "./menu/menu"
import Admin from "./admin/admin"
import Owner from "./owner/owner"
import {CartProvider} from "./cart/contextreducer"


function App() {
  return (
    <div>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
