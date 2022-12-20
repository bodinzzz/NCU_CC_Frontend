import "./Future.scss";
import PageOne from "../components/future/PageOne";
import PageTwo from "../components/future/PageTwo";
import PageThree from "../components/future/PageThree";

function Future() {
  return (
    <div className="future scroll-container">
      <div className="future__section-1">
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

export default Future;
