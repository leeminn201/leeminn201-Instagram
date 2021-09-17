import React from "react";
import "./Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li className="navkey home">
          <a href="a">Home</a>
        </li>
        <li className="navkey">
          <a href="a">Blog</a>
        </li>
        <li className="navkey about">
          <a href="a">About</a>
          <ul className="submenu">
            <li>
              <a href="a">Experience</a>
            </li>
            <li>
              <a href="a">Education</a>
            </li>
            <li>
              <a href="a">Hobby</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
