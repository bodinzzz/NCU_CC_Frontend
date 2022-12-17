import "./Home.scss";
import ScrollSection from "../components/ScrollSection";
import ThemeOne from "../components/home/ThemeOne";

function Home() {
  return (
    <div className="container">
      <div className="sectionContainer">
        <ScrollSection>
          <ThemeOne />
        </ScrollSection>
        <ScrollSection>
          <ThemeOne />
        </ScrollSection>
        <ScrollSection>
          <ThemeOne />
        </ScrollSection>
        <ScrollSection>
          <ThemeOne />
        </ScrollSection>
      </div>
    </div>
  );
}

export default Home;
