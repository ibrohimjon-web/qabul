import { IoIosSearch } from "react-icons/io";
import { PiBellRinging } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import "./NavbarTop.css";

const NavbarTop = () => {
  const location = useLocation();

  // Determine the greeting based on the current route
  const getGreeting = () => {
    switch (location.pathname) {
      case "/":
        return "👋Salom! Hurmatli foydalanuvchi";
      case "/status":
        return "Ariza holatini ko'rish";
      case "/submit":
        return "Hujjat topshirish";
      default:
        return "👋Salom! Hurmatli foydalanuvchi";
    }
  };

  return (
    <div className="navbartop-wrapper">
      <span>{getGreeting()}</span>
      <div className="navbar-top-icons">
        <IoIosSearch className="navtop-icon" />
        <PiBellRinging />
      </div>
    </div>
  );
};

export default NavbarTop;
