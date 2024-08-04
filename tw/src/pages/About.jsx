import React, { useState, useEffect, useRef } from "react";
import Hero2 from "../components/Hero/Hero2"; 
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
import { FaGlobe, FaHeart, FaChalkboardTeacher, FaMap } from "react-icons/fa";

const About = () => {
  // State to handle visibility of sections
  const [inView, setInView] = useState({ about: false, whyChoose: false });

  // Refs for intersection observer
  const aboutRef = useRef(null);
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '4px',
      threshold: 0.2,
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(prev => ({ ...prev, [entry.target.dataset.section]: true }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (whyChooseRef.current) observer.observe(whyChooseRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (whyChooseRef.current) observer.unobserve(whyChooseRef.current);
    };
  }, []);

  return (
    <>
      <Hero2 pageName="About Us" />
      <div className="container pt-8"> {/* Adjusted padding top */}
        <div
          ref={aboutRef}
          data-section="about"
          className={`py-10 transition-transform duration-1000 ease-in-out ${inView.about ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
        >
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About Us
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-white text-black rounded-lg shadow-lg p-6 transition-all duration-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondary"> {/* Hover gradient effect */}
              <h2 className="text-2xl font-bold mb-4">
                Our Mission
              </h2>
              <p>
                Safar.com (Pvt) Ltd. is dedicated to providing an unparalleled adventure experience for families, students, and nature enthusiasts. Our mission is to transform travel dreams into unforgettable realities through passion, expertise, and attention to detail.
              </p>
            </div>
            <div className="flex-1 bg-white text-black rounded-lg shadow-lg p-6 transition-all duration-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondary"> {/* Hover gradient effect */}
              <h2 className="text-2xl font-bold mb-4">
                Our Vision
              </h2>
              <p>
                We envision a world where every journey is an epic adventure. From adrenaline junkies to those seeking a peaceful escape, we aim to offer experiences that cater to all, making every trip memorable and impactful.
              </p>
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center bg-white text-black shadow-lg rounded-lg p-6 transition-all duration-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondary"> {/* Hover gradient effect */}
                <div className="text-4xl text-primary mr-4">
                  <FaGlobe />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Global Perspective</h3>
                  <p className="text-gray-600">
                    We embrace a global perspective, ensuring diverse and inclusive travel experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-white text-black shadow-lg rounded-lg p-6 transition-all duration-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondary"> {/* Hover gradient effect */}
                <div className="text-4xl text-primary mr-4">
                  <FaHeart />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Passionate Service</h3>
                  <p className="text-gray-600">
                    Our passionate team is dedicated to delivering exceptional service and unforgettable experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-white text-black shadow-lg rounded-lg p-6 transition-all duration-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondary"> {/* Hover gradient effect */}
                <div className="text-4xl text-primary mr-4">
                  <FaChalkboardTeacher />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Expert Guides</h3>
                  <p className="text-gray-600">
                    Our expert guides are committed to sharing local insights and ensuring a memorable journey.
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-white text-black shadow-lg rounded-lg p-6 transition-all duration-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondary"> {/* Hover gradient effect */}
                <div className="text-4xl text-primary mr-4">
                  <FaMap />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Local Expertise</h3>
                  <p className="text-gray-600">
                    Our deep local knowledge ensures you experience the best of each destination.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
