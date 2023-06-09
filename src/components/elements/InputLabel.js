import "./InputLabel.scss";
import labelThemeOneIcon from "../../assets/icon/labelThemeOneIcon.svg";
import labelThemeTwoIcon from "../../assets/icon/labelThemeTwoIcon.svg";
import labelThemeThreeIcon from "../../assets/icon/labelThemeThreeIcon.svg";

// Dropdown: Contains icon / text
/*
  Parameters:
    text: string 
    theme: number
*/
function InputLabel({ text, theme }) {
  /* Get different icon according to theme*/
  function getIcon({ theme }) {
    if (theme === "1") {
      return <img src={labelThemeOneIcon} alt="labelIcon" />;
    } else if (theme === "2") {
      return <img src={labelThemeTwoIcon} alt="labelIcon" />;
    } else if (theme === "3") {
      return <img src={labelThemeThreeIcon} alt="labelIcon" />;
    }
  }

  return (
    <div className="input-label">
      {getIcon({ theme })}
      <span>{text}</span>
    </div>
  );
}

export default InputLabel;
