import { useState } from "react";
import "./Dropdown.scss";

function Dropdown({ options, selectedValue, setSelectedValue }) {
  // DROPDOWN TOGGLE DATA
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
