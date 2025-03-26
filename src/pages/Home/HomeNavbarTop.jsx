import "./HomeNavbarTop.css";

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
              <a href="/" className="home-navbar-top-btn-link">
                Hujjat topshirish
              </a>
            </button>
            <button className="home-navbar-top-btnn">
              <a href="/" className="home-navbar-top-btn-link">
                Ariza holatini Ko‘rish
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbarTop;
