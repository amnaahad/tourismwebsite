import React from "react";
import FooterLogo from "../../assets/logo2.png";
import heroImage from "../../assets/hero.jpg"; // Import the hero image
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src={heroImage}
          alt="Footer Background"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="relative z-10 bg-black bg-opacity-50">
          <div className="grid md:grid-cols-3 py-2 gap-2">
            <div className="py-2 px-4 md:px-10 text-white">
              <h1 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="Footer Logo" className="max-h-[60px]" />
              </h1>
              <div className="flex items-center gap-2 text-lg">
                <FaLocationArrow />
                <p>Islamabad, Pakistan</p>
              </div>
              <div className="flex items-center gap-2 mt-2 text-lg">
                <FaMobileAlt />
                <p>+92 23456789</p>
              </div>
              <div className="flex items-center gap-2 mt-2 text-lg">
                <FaEnvelope />
                <p>support@travellogo.com</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-2 mt-2">
                  <a href="#" className="text-white text-2xl">
                    <FaInstagram />
                  </a>
                  <a href="#" className="text-white text-2xl">
                    <FaFacebook />
                  </a>
                  <a href="#" className="text-white text-2xl">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-2 flex justify-end text-white">
              <div className="py-2 px-4 md:px-10">
                <h1 className="text-xl sm:text-2xl font-bold text-right mb-2">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-2 text-md sm:text-lg">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1" key={link.title}>
                      <Link
                        to={link.link}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <span>&#11162;</span>
                        <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center py-2 text-white px-2 text-md" style={{ opacity: 0.8 }}>
            <div className="mt-2">
              <h2 className="text-lg font-bold">Subscribe to our Newsletter</h2>
              <form className="mt-1 flex flex-col sm:flex-row justify-center items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-1 px-2 rounded-lg text-black"
                />
                <button className="py-1 px-2 bg-primary text-white rounded-lg">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="mt-4"></div> {/* Added margin */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div>&copy; 2024 All rights reserved</div>
              <div>
                <Link to="/terms" className="hover:underline">Terms of Service</Link> | <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
