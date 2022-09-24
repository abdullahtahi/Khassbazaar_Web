import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import bag1 from "../../assesst/bag1.jpg";
import bags from "../../assesst/bags.jpg";
import img3 from "../../assesst/img3.jpg";
import img4 from "../../assesst/img4.PNG";
import "./SwiperImg.css";
export default function SwiperImg() {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "600px",
          height: "700px",
          // backgroundColor: "#fff",
          padding: "20px",
          position: "absolute",
          top: "4px",
        }}
      >
        <Swiper
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          slidesPerView={1}
          // className="product-imgaes-slider"
          loop={true}
          spaceBetween={50}
          navigation={true}
          thumbs={{ swiper: activeThumb }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img src={bag1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bags} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setActiveThumb}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          slidesPerView={4}
          className="product-imgaes-slider-thumbs"
          loop={true}
          spaceBetween={50}
          // navigation={true}
          onSlideChange={() => console.log("slide change")}
        >
          <div
            className="product-imgaes-slider-thumbs-wrapper"
            style={{
              marginTop: "25px",
              // border: "1px solid black",
            }}
          >
            <SwiperSlide>
              <img src={bag1} style={{}} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={bags} style={{ height: "130px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} style={{ height: "130px" }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} style={{ height: "130px" }} />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
