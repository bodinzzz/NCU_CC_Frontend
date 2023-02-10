import "./SubmitBtn.scss";
import submitIcon from "../../assets/icon/submitIcon.svg";

function SubmitBtn({ theme, onSubmit }) {
  return (
    <div className={"submit-btn__theme-" + theme} onClick={onSubmit}>
      <div>看數據</div>
      <img src={submitIcon} alt="submitIcon" />
    </div>
  );
}

export default SubmitBtn;
