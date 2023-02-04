import "./NavBar.scss";
import MenuIcon from "../assets/icon/MenuIcon.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="navbar__title" to="/">
        NCC
      </Link>
      <div className="navbar__menu">
        <Link className="navbar__menu__link__theme-1" to="/Future">
          未來道路選擇
        </Link>
        <Link className="navbar__menu__link__theme-2" to="/Graduated">
          畢業後在做什麼
        </Link>
        <Link className="navbar__menu__link__theme-3" to="/Career">
          職務類型大比拚
        </Link>
        <img src={MenuIcon} alt="menuIcon" className="navbar__menu__btn" />
      </div>
    </div>
  );
}

export default NavBar;
