import "./Graduated.scss";
import PageOne from "../components/graduated/PageOne";
import PageTwo from "../components/graduated/PageTwo";
import PageThree from "../components/graduated/PageThree";

function Graduated() {
  return (
    <div className="graduated scroll-container">
      <div className="graduated__section-1" id="graduated__section-1">
        <PageOne />
      </div>
      <div className="graduated__section-2" id="graduated__section-2">
        <PageTwo />
      </div>
      <div className="graduated__section-3" id="graduated__section-3">
        <PageThree />
      </div>
    </div>
  );
}

export default Graduated;
