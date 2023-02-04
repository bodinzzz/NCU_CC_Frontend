import "./Career.scss";
import PageOne from "../components/career/PageOne";
import PageTwo from "../components/career/PageTwo";
import PageThree from "../components/career/PageThree";
import PageFour from "../components/career/PageFour";
import PageFive from "../components/career/PageFive";

function Career() {
  return (
    <div className="career scroll-container">
      <div className="career__section-1" id="career__section-1">
        <PageOne />
      </div>
      <div className="career__section-2" id="career__section-2">
        <PageTwo />
      </div>
      <div className="career__section-3" id="career__section-3">
        <PageThree />
      </div>
      <div className="career__section-4" id="career__section-4">
        <PageFour />
      </div>
      <div className="career__section-5" id="career__section-5">
        <PageFive />
      </div>
    </div>
  );
}

export default Career;
