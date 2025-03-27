import { NavLink } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-overlay">
      <div className="login-containerr">
        <h2 className="login-title">Xush kelibsiz!</h2>
        <p className="login-subtitle">
          Davom etish uchun ma'lumotlaringizni kiriting!
        </p>

        <div className="login-tabs">
          <NavLink
            to="/login/in"
            className={({ isActive }) =>
              `login-tab ${isActive ? "active" : ""}`
            }
          >
            Kirish
          </NavLink>
          <NavLink
            to="/login/up"
            className={({ isActive }) =>
              `login-tab ${isActive ? "active" : ""}`
            }
          >
            Ro'yxatdan o'tish
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
