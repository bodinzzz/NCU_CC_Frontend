import "./InputLabel.scss";

function InputLabel({ text, icon }) {
  return (
    <div className="input-label">
      <img src={icon} alt="labelIcon" />
      <span>{text}</span>
    </div>
  );
}

export default InputLabel;
