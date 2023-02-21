// import QImg from "../../assets/image/Career/QImg.svg";
// import QReverseImg from "../../assets/image/Career/QReverseImg.svg";
import "./PageTwo.scss";
import InputLabel from "../elements/InputLabel";
import ScrollPageNav from "../elements/ScrollPageNav";

function PageTwo({ data }) {
  return (
    <div className="career-page-2">
      {/* <ScrollPageNav nowPage={1} /> */}
      <div className="career-page-2__title">
        <span>什麼是</span>
        <div>{data.name}</div>
      </div>
      <div className="career-page-2__description-container">
        <InputLabel text={"職類說明"} theme={"3"} />
        <div className="career-page-2__description-container__description">{data.description}</div>
      </div>
      <div className="career-page-2__sub-types">
        {data.subTypes.map((subType) => (
          <div className="career-page-2__sub-types__sub-type" key={subType.id}>
            {subType.name}
          </div>
        ))}
      </div>
      {/* AREA CHART */}
      <div className="career-page-2__chart-container">
        <div className="career-page-2__chart-container__description">
          {`有${data.areas[0].percentage}%的人在國內發展、\n
          ${data.areas[1].percentage}%的人在國外發展`}
        </div>
        <div className="career-page-2__chart-container__bar">
          <div className="career-page-2__chart-container__bar--left" style={{ width: `${data.areas[0].percentage}%` }} />
          <div className="career-page-2__chart-container__bar--right" style={{ width: `${data.areas[1].percentage}%` }} />
        </div>
      </div>
      {/* BACKGROUND IMAGE */}
      {/* <img className="career-page-2__background-image--left" src={QImg} /> */}
      {/* <img className="career-page-2__background-image--right" src={QReverseImg} /> */}
    </div>
  );
}

export default PageTwo;
