import React from "react";
import "./Menu.scss";

function Menu() {
  return (
    <div className="menu">
      <div className="navkey home">
        <a href="a">Home</a>
      </div>
      <div className="navkey">
        <a href="a">Blog</a>
      </div>
      <div className="navkey">
        <a href="a">About</a>
      </div>
    </div>
  );
}

export default Menu;

