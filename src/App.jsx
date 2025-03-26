import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NavbarTop from "./components/Navbar/NavbarTop";
import Contact from "./pages/Aloqa/Aloqa";
import ViewStatus from "./pages/Ariza/Ariza";
import FAQ from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import SubmitDocument from "./pages/HujjatTopshirish/Hujjat";
import Login from "./pages/Login/Login";
import News from "./pages/Yangiliklar/Yangiliklar";
import Footer from "./components/Footer/Footer";
import LoginIn from "./pages/Login/LoginIn";
import LoginUp from "./pages/Login/LoginUp";

const App = () => {
  const location = useLocation();

  // Bu marshrutlarda Navbar va Footer yashiriladi
  const hideNavbarFooter = ["/login", "/login/in", "/login/up"].includes(
    location.pathname
  );

  return (
    <div className="app-wrapper">
      {!hideNavbarFooter && <Navbar />}

      <div className="routes">
        {!hideNavbarFooter && <NavbarTop />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit" element={<SubmitDocument />} />
          <Route path="/status" element={<ViewStatus />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/up" element={<LoginIn />} />
          <Route path="/login/in" element={<LoginUp />} />
        </Routes>

        {!hideNavbarFooter && <Footer />}
      </div>
    </div>
  );
};

export default App;
