import React from "react";
import "./Navbar.scss";

import Menu from "components/Menu/Menu";
import MenuIcon from "components/MenuIcon/MenuIcon";
import searchbtn from "../../Media/searchbtn.png";
import logo from "../../Media/logoywname.png";
function Navbar() {
  return (
    <nav className="navbar">
    {/* Logo */}
      <img src={logo} alt="logo" id="logo"></img>
      <Menu />
      {/* <div className="navkey">
        <a href="a">Contact</a>
      </div> */}
      <div className="search-bar">
        <img src={searchbtn} alt="search btn"></img>
        <input type="text" name="" placeholder="Type to search everything about me..."></input>
      </div>
      <MenuIcon />
    </nav>
  );
}

export default Navbar;
