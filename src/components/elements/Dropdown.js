import { useState } from "react";
import "./Dropdown.scss";

function Dropdown({ options, selectedValue, setSelectedValue }) {
  // DROPDOWN TOGGLE DATA
  const [isDropdownOpen, toggleDropdown] = useState(false);

  // TOGGLE DROPDOWN
  const onClick = (index) => {
    setSelectedValue(index);
    toggleDropdown(!isDropdownOpen);
  };

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown__btn" onClick={() => toggleDropdown(!isDropdownOpen)}>
          {options[selectedValue].name}
          {isDropdownOpen ? <i className="arrow-up" /> : <i className="arrow-down" />}
        </div>
        {isDropdownOpen && (
          <div className="dropdown__items">
            {options.map((option, index) => (
              <div className="dropdown__items__item" onClick={() => onClick(index)}>
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
