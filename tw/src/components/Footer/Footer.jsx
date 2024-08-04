import React from "react";
import FooterLogo from "../../assets/logo2.png"; // Ensure this path is correct
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter, // Added Twitter icon
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import footerBackground from "../../assets/hero.jpg"; // Path to the uploaded image

const FooterLinks = [
  {
    title: "Help",
    links: [
      { title: "Contact Us", link: "/contact-us" },
      { title: "FAQ", link: "/faq" },
      { title: "Accessibility", link: "/accessibility" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { title: "About Us", link: "/About" },
      { title: "Services", link: "/Service" },
      { title: "Tour Packages", link: "/TourPackages" },
      { title: "Blogs", link: "/Blogs" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <div className="relative overflow-hidden rounded-t-2xl"> {/* Apply larger rounded top corners */}
        <img
          src={footerBackground}
          alt="Footer Background"
          className="w-full h-full object-cover absolute inset-0 rounded-t-3xl" // Apply larger rounded top corners to the image
          style={{ filter: "brightness(50%)" }} // Darken the background image
        />
        <div className="relative z-10 bg-black bg-opacity-50 rounded-t-2xl"> {/* Apply larger rounded top corners */}
          <div className="grid md:grid-cols-4 py-8 gap-8 px-4 md:px-10 text-white">
            <div className="py-2 md:col-span-1">
              <h1 className="flex items-center gap-2 text-xl sm:text-2xl font-bold mb-4">
                <img src={FooterLogo} alt="Footer Logo" className="max-h-[80px]" />
              </h1>
              <div className="flex items-center gap-2 mt-4">
                <a href="#" className="text-white text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white text-2xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-white text-2xl">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-white text-2xl">
                  <FaTwitter />
                </a>
              </div>
            </div>
            {FooterLinks.map((section) => (
              <div key={section.title} className="py-2 md:col-span-1">
                <h1 className="text-xl sm:text-2xl font-bold mb-2">{section.title}</h1>
                <ul className="flex flex-col gap-2 text-md sm:text-lg">
                  {section.links.map((link) => (
                    <li
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary"
                      key={link.title}
                    >
                      <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="py-2 md:col-span-1">
              <h1 className="text-xl sm:text-2xl font-bold mb-2">Get in touch</h1>
              <form className="flex flex-col sm:flex-row items-center gap-2 mb-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="py-1 px-2 rounded-lg text-black"
                />
                <button className="py-1 px-2 bg-primary text-white rounded-lg">
                  Subscribe
                </button>
              </form>
              <div className="flex flex-col gap-2 mt-4">
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
                  <p>safarsupport@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-4 text-white px-2 text-md bg-black bg-opacity-70 rounded-b-2xl"> {/* Add larger rounded bottom corners */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
              <div>&copy; 2024 All rights reserved</div>
              <div>
                <Link to="/terms" className="hover:underline">
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
