import React from 'react';
import "./Github.scss";
import github from "../../../../Media/Socialicon/github.png"
function Github() {
    return (
        <div className="github">
            <img src={github} className="socialicon" id="github" alt="github"></img>
            <a href="https://github.com/leeminn201" id="github">https://github.com/leeminn201</a>
           
        </div>
    )
}

export default Github;