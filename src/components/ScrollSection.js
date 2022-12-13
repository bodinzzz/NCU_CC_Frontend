import React from "react";
import "./ScrollSection.css";

function ScrollSection({ backgroundColor }) {
  return (
    <div className="section" style={{ backgroundColor: backgroundColor }}>
      <div className="copy">
        <h1>Lorem ipsum</h1>
      </div>
    </div>
  );
}

export default ScrollSection;
