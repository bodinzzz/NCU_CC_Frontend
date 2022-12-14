import "./Home.css";
import ScrollSection from "../components/ScrollSection";

function Home() {
  return (
    <div className="container">
      <div className="sectionContainer">
        <ScrollSection backgroundColor={"#e5e5e5"} />
        <ScrollSection backgroundColor={"#fffdef"} />
        <ScrollSection backgroundColor={"#e3e9f4"} />
        <ScrollSection backgroundColor={"#ebfaff"} />
      </div>
    </div>
  );
}

export default Home;
