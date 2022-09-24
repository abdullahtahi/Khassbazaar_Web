import React, { useEffect } from "react";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import ProductDetailpage from "./Pages/ProductDetailpage/ProductDetailpage";
import ProductDisplayPage from "./Pages/ProductDisplayPage/ProductDisplayPage";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CheckingPage from "./Pages/Checkingpage/CheckingPage";
import Navbar from "./Component/navvbar/Navbar";
import HomePage from "./Pages/homePage/homePage";

export default function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/khaasbazzar/home" element={<Home />} /> */}
        {/* <Route exact path="/khaasbazzar/login" element={<Login />} />
        <Route
          path="/khaasbazzar/productdisplaypage"
          element={<ProductDisplayPage />}
        />
        <Route
          path={`/khaasbazzar/productdetailpage/:id`}
          element={<ProductDetailpage />}
        />
        <Route path="/khaasbazzar/checkout" element={<Checkout />} />
        <Route path="/khaasbazzar/cart" element={<Cart />} />{" "} */}
      </Routes>
    </BrowserRouter>
  );
}
