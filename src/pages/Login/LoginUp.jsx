import { useState } from "react";
import "./LoginUp.css";
import email from "../../assets/img/Frame.png";
import password from "../../assets/img/Frame (1).png";
import login from "../../assets/img/login-03.png";
import open from "../../assets/img/Frame (2).png";
import { Link } from "react-router-dom";

const LoginUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="loginUp">
      <div className="container">
        <div className="loginUp-wrapper">
          <h2 className="loginUp-h2">Xush kelibsiz !</h2>
          <p className="loginUp-p">
            Davom etish uchun ma’lumotlaringizni kiriting!
          </p>

          <div className="tabs">
            <Link to={"/login/in"} className="tab active">
              Kirish
            </Link>
            <Link to={"/login/up"} className="tab">
              Ro’yxatdan o’tish
            </Link>
          </div>

          <form>
            <div className="input-group">
              <input
                type="text"
                placeholder="Email pochta yoki telefon raqam"
                required
                className="input-with-icon"
              />
              <img src={email} alt="Email" className="icon-inside-input" />
            </div>

            <div className="input-group">
              <div className="input-with-icon-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Parol"
                  required
                  className="input-with-icon"
                />
                <img src={password} alt="Lock" className="icon-inside-input" />
                <img
                  src={open}
                  alt="Show Password"
                  className="icon-show-password"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <span className="span1">Parolni unutdingizmi ?</span>
            </div>

            <button type="submit" className="login-btn">
              Kirish <img className="logib-png" src={login} alt="" />
            </button>

            <hr />

            <a href="/" style={{ textDecoration: "none" }}>
              <button type="button" className="google-login-btn">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVVQYZw4tQWePQ2veLb27RwpMbW712RzeAA&s"
                  alt="Google Logo"
                  className="google-logo"
                />
                Google orqali kirish
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUp;
