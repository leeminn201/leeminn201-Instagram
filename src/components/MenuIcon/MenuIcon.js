import React from 'react';
import Messicon from './Icon/Messicon';
import Hearticon from './Icon/HeartIcon';
import AvaSignin from './Icon/AvaSignin';
import './MenuIcon.scss';
function MenuIcon() {
    return (
        <div className="menuicon">
            <Messicon/>
            <Hearticon />
            <AvaSignin />
        </div>
    )
}

export default MenuIcon;