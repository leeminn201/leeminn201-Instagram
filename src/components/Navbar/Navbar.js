import React from "react";
import "./Navbar.scss";

import Menu from "components/Menu/Menu";
import MenuIcon from "components/MenuIcon/MenuIcon";
import searchbtn from "../../Media/searchbtn1.png";
import logo from "../../Media/logoywname.png";
function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" id="logo"></img>
      <Menu />
      <div className="search-bar">
        {/* <img src={searchbtn} alt="search btn"></img> */}
        <button type="submit"><img src={searchbtn} alt="Arrow Icon"></img></button>
        <input type="text" name="" placeholder="Type to search everything about me..."></input>
        
      </div>
      <MenuIcon />
    </nav>
  );
}

export default Navbar;
