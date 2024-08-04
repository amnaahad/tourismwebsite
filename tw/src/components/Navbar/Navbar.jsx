import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.png";
import Logo2 from "../../assets/logo2.png"; // Import the second logo
import { NavLink, Link } from "react-router-dom";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa"; // Import the dropdown arrow icon
import ResponsiveMenu from "./ResponsiveMenu";

// Define Navbar links including the new "More" dropdown
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Tour Packages",
    link: "/tourpackages",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "More",
    subLinks: [
      {
        name: "Blogs",
        link: "/blogs",
      },
      {
        name: "Contact Us",
        link: "/contactus",
      },
    ],
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const bookNowButtonRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleMoreDropdown = () => {
    setShowMoreDropdown(!showMoreDropdown);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setShowMenu(false);
    setShowMoreDropdown(false);
    window.scrollTo(0, 0); // Scroll to top when a link is clicked
  };

  const triggerBookNow = () => {
    if (bookNowButtonRef.current) {
      bookNowButtonRef.current.click();
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white shadow-lg backdrop-filter backdrop-blur-lg"
        }`}
        style={{
          boxShadow: isScrolled
            ? "0 8px 12px rgba(0, 0, 0, 0.2)"
            : "0 8px 12px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 font-bold text-2xl">
              <Link to="/" onClick={handleLinkClick}>
                <img
                  src={isScrolled ? Logo : Logo2}
                  alt="Logo"
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-16" : "h-24"
                  }`}
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-6">
                {NavbarLinks.map((link) => (
                  link.subLinks ? (
                    <li className="relative py-4" key={link.name}>
                      <button
                        onClick={toggleMoreDropdown}
                        className="flex items-center gap-1 text-base"
                      >
                        {link.name}
                        <FaChevronDown
                          className={`transition-transform duration-300 ${showMoreDropdown ? "rotate-180" : ""}`}
                        />
                      </button>
                      {showMoreDropdown && (
                        <ul className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded">
                          {link.subLinks.map((subLink) => (
                            <li key={subLink.name} className="py-2 px-4 hover:bg-gray-200">
                              <NavLink
                                to={subLink.link}
                                className={({ isActive }) =>
                                  isActive ? "text-lg underline" : "text-base"
                                }
                                end
                                onClick={handleLinkClick}
                              >
                                {subLink.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li className="py-4" key={link.name}>
                      <NavLink
                        to={link.link}
                        className={({ isActive }) =>
                          isActive ? "text-lg underline" : "text-base"
                        }
                        end
                        onClick={handleLinkClick}
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  )
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <button
                ref={bookNowButtonRef}
                className="bg-gradient-to-br from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
                onClick={handleOrderPopup}
              >
                Book Now
              </button>
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all"
                    size={30}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        {showMenu && <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />}
      </nav>
    </>
  );
};

export default Navbar;
