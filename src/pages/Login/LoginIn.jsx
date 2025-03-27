import { useState } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { MdEmail, MdOutlineHomeWork } from "react-icons/md";
import { PiLockKeyFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import login from "../../assets/img/login-03.png";
import "./LoginIn.css";

const LoginIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    <div className="loginIn">
      <div className="loginIn-wrapper">
        <h2 className="loginIn-h2">Xush kelibsiz!</h2>
        <p className="loginIn-p">
          Davom etish uchun ma'lumotlaringizni kiriting!
        </p>

        <div className="tabs">
          <Link to="/login/in" className="tab">
            Kirish
          </Link>
          <Link to="/login/up" className="tab active">
            Ro'yxatdan o'tish
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            {/* Name Input */}
            <div className="input-field">
              <FaUser className="icon" />
              <input
                type="text"
                name="firstName"
                placeholder="Ism"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Surname Input */}
            <div className="input-field">
              <FaUser className="icon" />
              <input
                type="text"
                name="lastName"
                placeholder="Familiya"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* City Input */}
            <div className="input-field">
              <MdOutlineHomeWork className="icon" />
              <input
                type="text"
                name="city"
                placeholder="Shaharni kiriting"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>

            {/* Date of Birth Input */}
            <div className="input-field">
              <FaCalendar className="icon" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email/Phone Input */}
            <div className="input-field">
              <MdEmail className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email pochta yoki telefon raqam"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password Input */}
            <div className="input-field">
              <PiLockKeyFill className="icon" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Parol kiriting"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </span>
            </div>

            {/* Confirm Password Input */}
            <div className="input-field">
              <PiLockKeyFill className="icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Parolni takroran kiriting"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </span>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Ro'yxatdan o'tish <img src={login} alt="Login" />
          </button>

          <div className="divider">
            <span>yoki</span>
          </div>

          <button type="button" className="google-login-btn">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVVQYZw4tQWePQ2veLb27RwpMbW712RzeAA&s"
              alt="Google"
              className="google-logo"
            />
            Google orqali kirish
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginIn;
