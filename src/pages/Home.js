import "./Home.scss";
import ThemeOne from "../components/home/ThemeOne";
import ThemeTwo from "../components/home/ThemeTwo";
import ThemeThree from "../components/home/ThemeThree";

function Home() {
  return (
    <div className="scroll-container">
      <div className="section-1">
        <ThemeOne />
      </div>
      <div className="section-2">
        <ThemeOne />
      </div>
      <div className="section-3">
        <ThemeTwo />
      </div>
      <div className="section-4">
        <ThemeThree />
      </div>
    </div>
  );
}

export default Home;
