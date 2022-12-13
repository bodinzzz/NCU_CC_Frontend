import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <p>NCU Career Center 就業力數據庫系統</p>
      <div>
        <a className="link" href="/">
          未來道路選擇
        </a>
        <a className="link" href="/">
          畢業後在做什麼
        </a>
        <a className="link" href="/">
          職務類型大比拚
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
