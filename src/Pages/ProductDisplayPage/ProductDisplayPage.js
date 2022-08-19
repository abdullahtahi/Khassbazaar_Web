import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./ProductDisplayPage.css"
import axios from "axios"
import Cards from '../../Component/Cards/Cards'

export default function ProductDisplayPage() {
  const dispatch=useDispatch();
  
  const products = useSelector((state) => state.getallproducts.products)
  // console.log("the products are",products)
useEffect(async() => {
const {data}=await axios.get("/khassbazzarproduct/getproducts")
dispatch({
  type:"PRODUCT_LOADING"
})

dispatch({
  type:"PRODUCT_SUCCESS",
  payload:data
})
// console.log(data)
}, [])




  
  return (
    
    
    <div>
{
    products.map((loop)=><Cards products={loop}/>
    )} 
       
      
    </div>

)
}
