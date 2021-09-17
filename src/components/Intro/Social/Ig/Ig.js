import React from 'react';
import "./Ig.scss";
import ig from "../../../../Media/Socialicon/ig.png"
function Ig() {
    return (
        <div className="ig">
            <img src={ig} className="socialicon" alt="ig"></img>
            <a href="https://www.instagram.com/jwmace201/" target="_blank" rel="noopener noreferrer">@jwmace201</a>
           
        </div>
    )
}

export default Ig;