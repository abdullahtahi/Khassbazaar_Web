import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { data } from "../../Component/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bag1 from "../../assesst/bag1.jpg";
import bags from "../../assesst/bags.jpg";
import Screenshot_3 from "../../assesst/Screenshot_3.png";
import Grid from "@mui/material/Grid";
import "./HomePage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Cards from "../../Component/Cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.getallproducts);
  const TrendingPro = products.filter((e) => e?.catagory === "Trending");
  console.log(TrendingPro);
  const [loading, setloading] = useState(false);

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
    <div>
      <div className="page-wrapper">
        {/* End .header */}
        <div>
          <div
            className="react-response-caursol"
            style={{
              marginTop: "2rem",
              fontWeight: "900",
              fontSize: "35px",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            Trending Design
            <Carousel
              autoPlay={true}
              interval="2000"
              infiniteLoop={true}
              stopOnHover={true}
            >
              <div>
                <img src={bag1} style={{ height: "100%", width: "90%" }} />
              </div>
              <div>
                <img style={{ height: "100%", width: "90%" }} src={bags} />
              </div>
              <div>
                <img
                  style={{ height: "100%", width: "90%" }}
                  src={Screenshot_3}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
