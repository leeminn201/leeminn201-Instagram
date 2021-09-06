import React from 'react';
import "./Fb.scss";
import fb from "../../../../Media/Socialicon/fb.png"
function Fb() {
    return (
        <div className="fb">
            <img src={fb} className="socialicon" alt="fb"></img>
            <a href="https://www.facebook.com/jmace201/">https://www.facebook.com/jmace201/</a>
           
        </div>
    )
}

export default Fb;