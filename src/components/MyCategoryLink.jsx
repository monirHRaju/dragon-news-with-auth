import React from 'react';
import { NavLink } from 'react-router';

const MyCategoryLink = ({children, to, className}) => {
    return (
            <NavLink
                to={to}
                className={({isActive})=> isActive ? `${className} font-semibold bg-base-300` : `${className} bg-none`}
            >
                {children}
            </NavLink>
        );
};

export default MyCategoryLink;