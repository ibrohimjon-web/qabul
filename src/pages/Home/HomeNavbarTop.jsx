import "./HomeNavbarTop.css";
import { NavLink } from "react-router-dom";

const HomeNavbarTop = () => {
  return (
    <div className="home-navbar-top">
      <div className="containerr">
        <div className="home-navbar-top-wrapper">
          <p className="home-navbar-top-p">To avoid Chrome's</p>
          <h1 className="home-navbar-top-h1">
            Prompt to translate a website we are asking that all designers.
          </h1>
          <p className="home-navbar-p">
            Submitting designs to the Design Market use English placeholder text
            instead of Lorem Ipsum latin.
          </p>
          <div className="home-navbar-top-btn-wrapper">
            <button className="home-navbar-top-btn">
              <NavLink className="navLink" to={"/submit"}>
                Hujjat topshirish
              </NavLink>
            </button>
            <button className="home-navbar-top-btnn">
              <NavLink className="navLinkk" to={"/status"}>
                Ariza holatini Ko‘rish
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbarTop;
