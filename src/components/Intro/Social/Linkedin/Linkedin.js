import React from 'react';
import "./Linkedin.scss";
import linkedin from "../../../../Media/Socialicon/linkedin.png"
function Linkedin() {
    return (
        <div className="linkedin">
            <img src={linkedin} className="socialicon" alt="linkedin"></img>
            <a href="https://www.linkedin.com/in/leeminn201/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/leeminn201/</a>
           
        </div>
    )
}

export default Linkedin;