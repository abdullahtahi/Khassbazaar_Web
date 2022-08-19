import React,{useEffect} from 'react'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import ProductDetailpage from './Pages/ProductDetailpage/ProductDetailpage'
import ProductDisplayPage from './Pages/ProductDisplayPage/ProductDisplayPage'
import {useSelector, useDispatch} from 'react-redux'
import axios from "axios"
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import CheckingPage from './Pages/Checkingpage/CheckingPage'

export default function App() {
const dispatch=useDispatch();
  useEffect(async () => {
   const {data}=await axios.get("/khassbazzaruser/usermystate");
console.log("the currently login user" ,data)
dispatch({
  type:"STATE__LOADING"})
  dispatch({
    type:"STATE__SUCCESS",
    payload:data
  })
  }, [])
 


  return (
  <BrowserRouter>
    <Routes>
  <Route path="/khaasbazzar/productdisplaypage" element={<Home/>}/>
  <Route path="/khaasbazzar/home" element={<Home/>}/>
  <Route exact path="/khaasbazzar/login" element={<Login/>}/>
  <Route path="/" element={<ProductDisplayPage/>}/>
  <Route path={`/khaasbazzar/productdetailpage/:id`} element={<ProductDetailpage/>}/>
  <Route path="/khaasbazzar/checkout" element={<Checkout/>}/>
  <Route path="/khaasbazzar/cart" element={<Cart/>}/>
  <Route exact path="/" element={<CheckingPage/>}/>
    </Routes>
  </BrowserRouter>
  
  )
}
