import React from 'react';
import classes from 'components/Navigation/NavItems/NavItems.module.css';
import NavItem from 'components/Navigation/NavItem/NavItem'

const navItems = (props) => {
    return <ul className={classes.NavigationItems}>
       <NavItem link="/" active>Burger Builder</NavItem>
       <NavItem link="/">Checkout</NavItem>
    </ul>
}
export default navItems