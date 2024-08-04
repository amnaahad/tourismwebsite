import React from "react";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <nav className="flex flex-col flex-grow">
        <ul className="space-y-4 text-xl">
          {NavbarLinks.map((data) => (
            <li key={data.name}>
              <Link
                to={data.link}
                onClick={() => setShowMenu(false)}
                className="mb-5 inline-block"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Adding new links */}
          <li>
            <Link
              to="/blogs"
              onClick={() => setShowMenu(false)}
              className="mb-5 inline-block"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/ContactUs"
              onClick={() => setShowMenu(false)}
              className="mb-5 inline-block"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveMenu;
