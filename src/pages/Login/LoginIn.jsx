import { useState } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5"; // Added IoEyeSharp for toggling visibility
import { MdEmail, MdOutlineHomeWork } from "react-icons/md";
import { PiLockKeyFill } from "react-icons/pi";
import login from "../../assets/img/login-03.png";
import "./LoginIn.css";
import { Link } from "react-router-dom";

const LoginIn = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password

  return (
    <div className="loginIn">
      <div className="container">
        <div className="loginIn-wrapper">
          <h2 className="loginIn-h2">Xush kelibsiz !</h2>
          <p className="loginIn-p">
            Davom etish uchun ma’lumotlaringizni kiriting!
          </p>
          <div className="tabs">
            <Link to={"/login/in"} className="tab">
              Kirish
            </Link>
            <Link to={"/login/up"} className="tab active">
              Ro’yxatdan o’tish
            </Link>
          </div>

          <form>
            <div className="form-group">
              {/* Name Input */}
              <label className="input-field">
                <FaUser className="icon" />
                <input type="text" placeholder="Ism" />
              </label>

              {/* Surname Input */}
              <label className="input-field">
                <FaUser className="icon" />
                <input type="text" placeholder="Familiya" />
              </label>

              {/* City Input */}
              <label className="input-field">
                <MdOutlineHomeWork className="icon" />
                <input type="text" placeholder="Shaharni kiriting" />
              </label>

              {/* Date of Birth Input */}
              <label className="input-field">
                <FaCalendar className="icon" />
                {/* Using emoji for date icon */}
                <input type="date" placeholder="Tug’ilgan sana" />
              </label>

              {/* Email/Phone Input */}
              <label className="input-field">
                <MdEmail className="icon" />
                <input
                  type="email"
                  placeholder="Email pochta yoki telefon raqam"
                />
              </label>

              {/* Password Input */}
              <label className="input-field">
                <PiLockKeyFill className="icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Parol kiriting"
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
                </span>
              </label>

              {/* Confirm Password Input */}
              <label className="input-field">
                <PiLockKeyFill className="icon" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Parolni takroran kirirting"
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
                </span>
              </label>
            </div>
            <button type="submit" className="login-btn">
              Kirish <img className="logib-png" src={login} alt="" />
            </button>

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

export default LoginIn;
