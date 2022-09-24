import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../../Component/data";
import "./ProductDisplayPage.css";
import axios from "axios";
import Cards from "../../Component/Cards/Cards";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
export default function ProductDisplayPage() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const products = useSelector((state) => state.getallproducts.products);

  console.log("the products are", products);
  useEffect(async () => {
    setloading(true);
    const { data } = await axios.get(
      "http://localhost:5000/khassbazzarproduct/getproducts"
    );
    setloading(false);
    dispatch({
      type: "PRODUCT_LOADING",
    });

    dispatch({
      type: "PRODUCT_SUCCESS",
      payload: data,
    });
    // console.log(data)
  }, []);

  return (
    <div className="container">
      {loading && <CircularProgress size={200} color="secondary" />}
      {products.map((loop) => (
        <Grid container>
          <Cards products={loop} />
        </Grid>
      ))}
    </div>
  );
}
