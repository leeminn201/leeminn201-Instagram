import React from 'react';
import "./Social.scss";
import Github from './Github.js/Github';
import Linkedin from './Linkedin/Linkedin';
import Gmail from './Gmail/Gmail';
import Fb from './Fb/Fb';
import Ig from './Ig/Ig';
function Social() {
    return (
        <div className="social">
            <table>
                
                <Linkedin />
                <Fb />
                <Github/>
                <Gmail />
                <Ig />
                
                
            </table>
        </div>
    )
}

export default Social;