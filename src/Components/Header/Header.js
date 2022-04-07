import { useEffect } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useVideos } from "../../Context";
import { ACTION_TYPE } from "../../Utils/constants";
function Header() {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { filterState, dispatchFilterState } = useVideos();
  const { searchQuery } = filterState;
  const searchHandler = (e) => {
    if (location.pathname !== "/videos") navigate("/videos");
    else
      dispatchFilterState({
        type: ACTION_TYPE.FILTER_BY_SEARCH,
        payload: e.target.value,
      });
  };

  useEffect(() => {
    dispatchFilterState({ type: ACTION_TYPE.FILTER_BY_SEARCH, payload: "" });
  }, [navigate]);
  return (
    <nav className="main-navhead">
      <div className="main-menu">
        <img className="brand-logo" src={logo} alt="Brand Logo" />
        <h3 className="brand">
          <Link to="/">FitsU Play</Link>
        </h3>
      </div>

      <div className="search-container">
        <i className="fa fa-search"></i>
        <input
          value={searchQuery}
          onChange={searchHandler}
          className="searchbar-input search"
          type="text"
          placeholder="type to search"
        />
      </div>
      <ul className="right-menu">
        <li onClick={() => (token ? navigate("/profile") : navigate("/login"))}>
          <i className="fa fa-user fa-2x"></i>
        </li>
      </ul>
    </nav>
  );
}

export { Header };
