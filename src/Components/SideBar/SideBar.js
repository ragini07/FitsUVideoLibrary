import "./SideBar.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export function SideBar() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const activeLink = ({ isActive }) => (isActive ? "active-link" : "");

  return (
    <>
      <div
        className="menu-btn"
        onClick={() => setToggleSideBar((prev) => !prev)}
      >
        <i class="fa fa-bars fa-2x"></i>
      </div>
      <div
        className={`side-content side-content-mobile ${
          toggleSideBar ? "show" : ""
        }`}
      >
        <div className="list2">
          <ul
            className="side-sublist"
            onClick={() => setToggleSideBar((prev) => !prev)}
          >
            <li>
              <NavLink className={activeLink} to="/videos">
                <i className="fa fa-home icon-lg"></i>Explore
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/likedvideos">
                <i className="fa fa-heart icon-lg"></i>Liked Videos
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/watchlater">
                <i className="fa fa-clock-o icon-lg"></i>Watch Later
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/history">
                <i className="fa fa-history icon-lg"></i>History
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/playlists">
                <i className="fa fa-play-circle icon-lg"></i>PlayList
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
