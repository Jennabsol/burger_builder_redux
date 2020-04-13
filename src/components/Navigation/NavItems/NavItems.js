import React from 'react';
import classes from 'components/Navigation/NavItems/NavItems.module.css';
import NavItem from 'components/Navigation/NavItem/NavItem'

const navItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavItem link="/" exact>Burger Builder</NavItem>
        <NavItem link="/orders">Orders</NavItem>
    </ul>
);
export default navItems