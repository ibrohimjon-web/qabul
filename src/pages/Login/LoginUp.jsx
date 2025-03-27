import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import loginIcon from "../../assets/img/login-03.png";
import "./LoginUp.css";
import { Link } from "react-router-dom";

const LoginUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="loginUp">
      <div className="loginUp-wrapper">
        <h2 className="loginUp-h2">Xush kelibsiz!</h2>
        <p className="loginUp-p">
          Davom etish uchun ma'lumotlaringizni kiriting!
        </p>

        <div className="tabs">
          <Link to="/login/in" className="tab active">
            Kirish
          </Link>
          <Link to="/login/up" className="tab">
            Ro'yxatdan o'tish
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Email/Phone Input */}
          <div className="input-field">
            <MdEmail className="input-icon" />
            <input
              type="text"
              name="email"
              placeholder="Email pochta yoki telefon raqam"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="input-field">
            <MdLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Parol"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Parolni unutdingizmi?</Link>
          </div>

          <button type="submit" className="login-btn">
            Kirish <img src={loginIcon} alt="Login" />
          </button>

          <div className="divider">
            <span>yoki</span>
          </div>

          <button type="button" className="google-login-btn">
            <FcGoogle className="google-icon" />
            Google orqali kirish
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginUp;
