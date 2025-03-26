import "./Footer.css"
import logo from "../../assets/logof.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logotim img" />
      </div>
      <div className="footer1">
        <div className="footer-1">
          <ul className="footer-links">
            <li className="footer-link">Aloqa</li>
            <li className="footer-link">+998 93 222 33 44</li>
            <li className="footer-link">qabul.uz@gmail.com</li>
          </ul>
        </div>
        <div className="footer-1">
          <ul className="footer-links">
            <li className="footer-link">Call center</li>
            <li className="footer-link">1354</li>
            <li className="footer-link">Dushanbadan Jumagacha</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer