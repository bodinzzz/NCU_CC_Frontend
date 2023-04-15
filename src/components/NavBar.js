import { useState } from "react";
import "./NavBar.scss";
import MenuIcon from "../assets/icon/MenuIcon.svg";
import CloseIcon from "../assets/icon/CloseIcon.svg";
import { Link } from "react-router-dom";

function NavBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="navbar">
      <Link className="navbar__title" to="/NCU_CC_Frontend/">
        NCC
      </Link>
      <div className="navbar__menu">
        <div className="navbar__menu__top-bar">
          <Link className="navbar__menu__link__theme-1" to="/NCU_CC_Frontend/Future">
            未來道路選擇
          </Link>
          <Link className="navbar__menu__link__theme-2" to="/NCU_CC_Frontend/Graduated">
            畢業後在做什麼
          </Link>
          <Link className="navbar__menu__link__theme-3" to="/NCU_CC_Frontend/Career">
            職務類型大比拚
          </Link>
        </div>
        {/* <img src={isSideBarOpen ? CloseIcon : MenuIcon} alt="icon" className="navbar__menu__btn" onClick={() => setIsSideBarOpen(!isSideBarOpen)} /> */}
        <img src={MenuIcon} alt="MenuIcon" className="navbar__menu__btn" onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
        {isSideBarOpen ? (
          <div className="navbar__menu__side-bar" id="side-bar">
            <img src={CloseIcon} alt="CloseIcon" className="navbar__menu__btn" onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
            <Link className="navbar__menu__link__theme-1" to="/NCU_CC_Frontend/Future">
              未來道路選擇
            </Link>
            <Link className="navbar__menu__link__theme-2" to="/NCU_CC_Frontend/Graduated">
              畢業後在做什麼
            </Link>
            <Link className="navbar__menu__link__theme-3" to="/NCU_CC_Frontend/Career">
              職務類型大比拚
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
