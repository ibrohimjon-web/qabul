import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { IoSearchCircleOutline } from "react-icons/io5";
import { LuHeadset } from "react-icons/lu";
import { RiEditBoxLine, RiLoginCircleLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { PiBellRinging } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close navbar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Mobile Navbar */}
      <div className={`navbar-phone ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-phone-top">
          <div className="hamburger" onClick={toggleNavbar}>
            {isOpen ? (
              <AiOutlineClose size={30} />
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
          <NavLink to="/" className="logo-p">
            <img src={logo} alt="Logotim img" />
          </NavLink>
          <NavLink to="/notifications">
            <PiBellRinging className="navbar-phone-icon" />
          </NavLink>
        </div>
        <div className="navbar-phone-search">
          <IoIosSearch size={30} />
          <input type="text" placeholder="Qidirish..." />
        </div>
      </div>

      {/* Backdrop for mobile */}
      <div
        className={`backdrop ${isOpen ? "show" : ""}`}
        onClick={toggleNavbar}
      ></div>

      {/* Desktop Navbar */}
      <div
        className={`navbar ${isOpen ? "show" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <img src={logo} alt="Logotim img" className="logo" />
        <ul className="links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "link active" : "link")}
              end
            >
              <FiHome className="link-icon" /> Bosh sahifa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/submit"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <RiEditBoxLine className="link-icon" /> Hujjat topshirish
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/status"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <TiDocumentText className="link-icon" /> Ariza holatini ko'rish
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <HiOutlineMegaphone className="link-icon" /> Yangiliklar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <IoSearchCircleOutline className="link-icon" /> FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              <LuHeadset className="link-icon" /> Aloqa
            </NavLink>
          </li>
          <div className="login-container">
            <NavLink to="/login" className="link-login">
              Kirish <RiLoginCircleLine className="link-icon" />
            </NavLink>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
