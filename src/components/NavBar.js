import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="title" to="/">
        NCU Career Center 就業力數據庫系統
      </Link>
      <nav className="links">
        <Link className="link" to="/Future">
          未來道路選擇
        </Link>
        <Link className="link" to="/Graduated">
          畢業後在做什麼
        </Link>
        <Link className="link" to="/Future">
          職務類型大比拚
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
