import "./ScrollSection.css";
import ThemeInfo from "./ThemeInfo";
import ThemeOneImg from "../assets/image/Home/ThemeOneImg.svg";

// secondary container in home page
function ScrollSection({ backgroundColor }) {
  return (
    <div className="section" style={{ backgroundColor: backgroundColor }}>
      <ThemeInfo ThemeImg={ThemeOneImg} />
    </div>
  );
}

export default ScrollSection;
