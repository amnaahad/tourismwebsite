import React, { useState } from "react";
import Slider from "react-slick";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import Pic1 from "../assets/pic1.jpg";
import Pic2 from "../assets/pic2.jpg";
import Pic3 from "../assets/pic3.jpg";
import Pic4 from "../assets/pic4.jpg";
import Pic5 from "../assets/pic5.jpg";
import Pic6 from "../assets/pic6.jpg";
import ScrollToTopButton from "../components/ScrollToTopButton"; // Import the new component

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const images = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6];

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>

        <Places handleOrderPopup={handleOrderPopup} limit={3} heading="Best Places to Visit" />
        <BannerPic img={BannerImg} />

        {/* Carousel Section */}
        <div className="relative w-full mt-8 grid grid-cols-1 max-w-[800px] mx-auto gap-6">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-3 text-3xl font-bold ml-1" style={{ marginLeft: '-3rem' }}>
            Some Memories From Our Recent Trip
          </h1>
          <Slider {...sliderSettings}>
            {images.map((img) => (
              <div key={img} className="px-2 ">
                <img
                  src={img}
                  alt={`Slide ${img}`}
                  className="w-full h-52 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        <BlogsComp />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        <ScrollToTopButton /> 
      </div>
    </>
  );
};

export default Home;
