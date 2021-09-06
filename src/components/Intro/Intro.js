import React from 'react';
import "./Intro.scss";
import Infor from './Infor/Infor';
import Social from './Social/Social';
function Intro() {
    return (
        <div className="intro">
            <Infor/>
            <Social />
        </div>
    )
}

export default Intro;