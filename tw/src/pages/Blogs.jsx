import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Hero2 from "../components/Hero/Hero2"; // Import the Hero2 component

const Blogs = () => {
  return (
    <div className="min-h-screen  bg-gray-100">
      <Hero2 pageName="Blogs" /> 

      <BlogsComp />
    </div>
  );
};

export default Blogs;
