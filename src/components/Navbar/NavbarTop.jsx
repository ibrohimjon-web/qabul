import { IoIosSearch } from "react-icons/io";
import "./NavbarTop.css"
import { PiBellRinging } from "react-icons/pi";

const NavbarTop = () => {
  return (
    <div className="navbartop-wrapper">
      👋Salom! Hurmatli foydalanuvchi
      <div className="navbar-top-icons">
        <IoIosSearch /> <PiBellRinging />
      </div>
    </div>
  );
}

export default NavbarTop