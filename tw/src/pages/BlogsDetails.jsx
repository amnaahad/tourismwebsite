import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlogsComp from "../components/Blogs/BlogsComp";

const BlogsDetails = (props) => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook for navigation

  const { image, date, title, description, author } = location.state;

  return (
    <div className="pt-8 mt-16">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container mx-auto px-4 py-6">
        <p className="text-slate-600 text-sm py-3">
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      <BlogsComp />

      {/* Back Button */}
      <button
        onClick={() => navigate("/blogs")} // Navigate to Blogs.jsx
        className="fixed bottom-4 left-4 text-white bg-primary rounded-full p-3 shadow-lg hover:bg-primary-dark transition duration-300"
        style={{ 
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          lineHeight: '1'
        }}
      >
        &larr;
      </button>
    </div>
  );
};

export default BlogsDetails;
