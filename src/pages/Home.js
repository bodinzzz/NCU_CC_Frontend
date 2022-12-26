import "./Home.scss";
import ThemeOne from "../components/home/ThemeOne";
import ThemeTwo from "../components/home/ThemeTwo";
import ThemeThree from "../components/home/ThemeThree";

function Home() {
  return (
    <div className="home scroll-container">
      <div className="home__section-1">
        <span>NCU Career Center 就業力數據庫系統</span>
        {/* <ThemeOne /> */}
      </div>
      <div className="home__section-2">
        <ThemeOne />
      </div>
      <div className="home__section-3">
        <ThemeTwo />
      </div>
      <div className="home__section-4">
        <ThemeThree />
      </div>
    </div>
  );
}

export default Home;
