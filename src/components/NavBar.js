import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="navbar__title" to="/">
        NCC
      </Link>
      <div className="navbar__links">
        <Link className="navbar__links__link__theme-1" to="/Future">
          未來道路選擇
        </Link>
        <Link className="navbar__links__link__theme-2" to="/Graduated">
          畢業後在做什麼
        </Link>
        <Link className="navbar__links__link__theme-3" to="/Career">
          職務類型大比拚
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
