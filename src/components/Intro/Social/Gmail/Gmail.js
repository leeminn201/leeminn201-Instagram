import React from 'react';
import "./Gmail.scss";
import gmail from "../../../../Media/Socialicon/gm.png"
function Gmail() {
    return (
        <div className="gmail">
            <img src={gmail} className="socialicon" alt="gmail"></img>
            <a href="leeminn201@gmail.com">leeminn201@gmail.com</a>
           
        </div>
    )
}

export default Gmail;