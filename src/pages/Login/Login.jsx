import { NavLink } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <div className="login">
      <h2 className="login-h2">Xush kelibsiz !</h2>
      <p className="login-p">Davom etish uchun ma’lumotlaringizni kiriting!</p>
      <div className="login-links">
        <NavLink to={"/login/in"}
          className={({ isActive }) =>
            isActive ? "loginlink active" : "loginlink"
          }
        >
          Kirish
        </NavLink>
        <NavLink to={"/login/up"}
          className={({ isActive }) =>
            isActive ? "loginlink active" : "loginlink"
          }
        >
          Ro&apos;yxatdan o&apos;tish
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
