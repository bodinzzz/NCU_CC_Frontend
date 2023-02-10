import { useState } from "react";
import "./Dropdown.scss";

// Dropdown: Contains dropdown button / dropdown items
/*
  Parameters:
    options: object  // Need the property "name"
    selectedValue: number
    setSelectedValue: function // [selectedValue, setSelectedValue] = useState()
*/
function Dropdown({ options, selectedValue, setSelectedValue }) {
  // DROPDOWN TOGGLE STATE
  const [isOpen, setIsOpen] = useState(false);

  // TOGGLE DROPDOWN
  const toggleDropdown = (index) => {
    setSelectedValue(index);
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown__btn" onClick={() => setIsOpen(!isOpen)}>
          {options[selectedValue].name}
          {isOpen ? <i className="arrow-up" /> : <i className="arrow-down" />}
        </div>
        {isOpen && (
          <div className="dropdown__items">
            {options.map((option, index) => (
              <div className="dropdown__items__item" onClick={() => toggleDropdown(index)}>
                {options[index].name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
