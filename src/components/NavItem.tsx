import React from 'react';

interface NavItemProps {
    id: number,
    itemName: string,
    active: boolean,
    to: string,
    activeNavItem: string
}
const NavItem: React.FC<NavItemProps> = ({navItem}) => {
    return (
        <div>
            {}
        </div>
    )
    
}

export default NavItem;