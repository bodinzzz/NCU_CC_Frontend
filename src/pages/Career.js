import "./Career.scss";
import PageOne from "../components/career/PageOne";
import PageTwo from "../components/career/PageTwo";
import PageThree from "../components/career/PageThree";

function Career() {
  return (
    <div className="career scroll-container">
      <div className="career__section-1">
        <PageOne />
      </div>
      <div className="future__section-2">
        <PageTwo />
      </div>
      <div className="future__section-3">
        <PageThree />
      </div>
    </div>
  );
}

export default Career;
