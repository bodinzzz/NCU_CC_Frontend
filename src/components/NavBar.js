import "./NavBar.scss";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="navbar__title" to="/">
        NCU Career Center 就業力數據庫系統
      </Link>
      <div className="navbar__links">
        <Link className="navbar__links__link" to="/Future">
          未來道路選擇
        </Link>
        <Link className="navbar__links__link" to="/Graduated">
          畢業後在做什麼
        </Link>
        <Link className="navbar__links__link" to="/Career">
          職務類型大比拚
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
