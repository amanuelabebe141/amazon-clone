import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Return from "./pages/Return/Return";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import Single from "./pages/Single/Single";
import Payment from "./pages/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/return" element={<Return />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/payment" element={
            <Elements stripe={loadStripe('pk_test_51RVFFeCpnvhvffoCBuNAPoeWtx6kum0EfXt00czKDWb5amlWCjELP3eGVmSlIFjW5Y2RlmD2IJh5fNgb1f95cakC00kO18AvYZ')}>
              <Payment/>
            </Elements>
            
            }></Route>
          <Route path="/category/:niche" element={<Category />}></Route>
          <Route path="/products/:singleNiche" element={<Single />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
