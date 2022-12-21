import "./SubmitBtn.scss";
import submitIcon from "../../assets/icon/submitIcon.svg";

function SubmitBtn({ theme }) {
  return (
    <div className={"submit-btn__theme-" + theme}>
      <div>看數據</div>
      <img src={submitIcon} alt="submitIcon" />
    </div>
  );
}

export default SubmitBtn;
