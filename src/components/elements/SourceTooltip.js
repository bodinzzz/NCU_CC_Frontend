import "./SourceTooltip.scss";

function SourceTooltip({ icon, text }) {
  return (
    <div className="tooltip">
      <img src={icon} alt="InfoIcon" />
      <div className="tooltip__tooltipText">{text}</div>
    </div>
  );
}

export default SourceTooltip;
