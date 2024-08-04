import React, { useState, useEffect, useRef } from "react";
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
import ScrollToTopButton from "../components/ScrollToTopButton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider images
const images = [Pic1, Pic2, Pic3, Pic4, Pic5, Pic6];

// Home Component
const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  // Ref and state for intersection observer
  const [inView, setInView] = useState({ places: false, banner: false, blogs: false, testimonial: false });
  const placesRef = useRef(null);
  const bannerRef = useRef(null);
  const blogsRef = useRef(null);
  const testimonialRef = useRef(null);

  // Intersection observer logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(prev => ({ ...prev, [entry.target.dataset.section]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (placesRef.current) observer.observe(placesRef.current);
    if (bannerRef.current) observer.observe(bannerRef.current);
    if (blogsRef.current) observer.observe(blogsRef.current);
    if (testimonialRef.current) observer.observe(testimonialRef.current);

    return () => {
      if (placesRef.current) observer.unobserve(placesRef.current);
      if (bannerRef.current) observer.unobserve(bannerRef.current);
      if (blogsRef.current) observer.unobserve(blogsRef.current);
      if (testimonialRef.current) observer.unobserve(testimonialRef.current);
    };
  }, []);

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

        <div
          ref={placesRef}
          data-section="places"
          className={`transition-transform duration-1000 ease-in-out transform ${inView.places ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <Places handleOrderPopup={handleOrderPopup} limit={3} heading="Best Places to Visit" />
        </div>

        <div
          ref={bannerRef}
          data-section="banner"
          className={`transition-transform duration-1000 ease-in-out transform ${inView.banner ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <BannerPic img={BannerImg} />
        </div>

        <div className="relative w-full mt-8 grid grid-cols-1 max-w-[800px] mx-auto gap-6">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-3 text-3xl font-bold ml-1" style={{ marginLeft: '-3rem' }}>
            Some Memories From Our Recent Trip
          </h1>
          <Slider {...sliderSettings}>
            {images.map((img) => (
              <div key={img} className="px-2">
                <img
                  src={img}
                  alt={`Slide ${img}`}
                  className="w-full h-52 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div
          ref={blogsRef}
          data-section="blogs"
          className={`transition-transform duration-1000 ease-in-out transform ${inView.blogs ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <BlogsComp />
        </div>

        <div
          ref={testimonialRef}
          data-section="testimonial"
          className={`transition-transform duration-1000 ease-in-out transform ${inView.testimonial ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <Testimonial />
        </div>

        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Home;
