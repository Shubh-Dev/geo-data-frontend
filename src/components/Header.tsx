import React, { useState } from 'react';
import mainNavItems from '../utils/navigation'; 

interface navigation {
    itemName: string,
    active: boolean,
    to: string,
    activeNavItem: string
};

const Header = () => {

    return (
        <div>
           <div>
            logo
           </div>
           <nav>
             {mainNavItems.forEach((item) => {
                
             })}
           </nav>
        </div>
    )
}

export default Header;