import "./Career.scss";
import PageOne from "../components/career/PageOne";
// import PageTwo from "../components/career/PageTwo";

function Career() {
  return (
    <div className="career scroll-container">
      <div className="career__section-1">
        <PageOne />
      </div>
      <div className="future__section-2"></div>
      <div className="future__section-3"></div>
    </div>
  );
}

export default Career;
