import React from "react";
import { BsFillHouseAddFill, BsChatLeftDotsFill, BsPersonVcardFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsFillHouseAddFill className="icon_header" />User Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/posts">
            <BsChatLeftDotsFill className="icon" />Posts
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to="/users">
            <BsPersonVcardFill className="icon" /> Users
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
