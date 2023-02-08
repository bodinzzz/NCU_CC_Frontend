import "./RadioBtnGroup.scss";

// Dropdown: Contains dropdown button / dropdown items
/*
  Parameters:
    options: object  // Need the property "name"
    selectedValue: number
    setSelectedValue: function // [selectedValue, setSelectedValue] = useState()
    type: string //different type of radio button (not used yet)
*/
function RadioBtnGroup({ options, selectedValue, setSelectedValue, type }) {
  return (
    <div className="radio-btn-group">
      {options.map((option, index) => {
        return (
          <div
            className={index === selectedValue ? "radio-btn-group__radio-btn--selected" : "radio-btn-group__radio-btn--unselected"}
            onClick={() => setSelectedValue(index)}
            key={index}
          >
            {option.name}
          </div>
        );
      })}
    </div>
  );
}

export default RadioBtnGroup;
