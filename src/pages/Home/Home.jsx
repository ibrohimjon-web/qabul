import "./Home.css";
import HomeCard from "./HomeCard";
import HomeEnd from "./HomeEnd";
import HomeNavbarBottom from "./HomeNavbarBottom";
import HomeNavbarTop from "./HomeNavbarTop";

const Home = () => {
  return (
    <div>
      <HomeNavbarTop />
      <HomeNavbarBottom />
      <HomeCard />
      <HomeEnd />
    </div>
  );
};

export default Home;
