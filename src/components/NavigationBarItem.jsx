import React from 'react';
import {NavLink} from "react-router-dom";

const NavigationBarItem = ({to, children}) => {
    return (
        <li className={'nav-item'}>
            <NavLink to={to} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>
                {children}
            </NavLink>
        </li>
    );
};

export default NavigationBarItem;