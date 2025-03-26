import "./HomeNavbarBottom.css";
import img1 from "../../assets/img2/img1.png";
import img2 from "../../assets/img2/img2.png";
import img3 from "../../assets/img2/img3.png";
import img4 from "../../assets/img2/img4.png";

const HomeNavbarBottom = () => {
  return (
    <div className="home-navbar-bottom">
      <div className="container">
        <div className="home-navbar-bottom-wrapper">
          <div className="img-wrapper1">
            <img className="img1" src={img1} alt="img 1" />
            <img className="img2" src={img2} alt="img 2" />
          </div>
          <div className="img-wrapper2">
            <img className="img3" src={img3} alt="img 3" />
            <img className="img4" src={img4} alt="img 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbarBottom;
