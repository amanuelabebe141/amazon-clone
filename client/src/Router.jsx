import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Return from "./pages/Return/Return";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/return" element={<Return />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/category/:niche" element={<Category />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
