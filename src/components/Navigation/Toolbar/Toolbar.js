import React from "react";
import classes from "components/Navigation/Toolbar/Toolbar.module.css";
import Logo from "components/Logo/Logo";
import NavItems from "components/Navigation/NavItems/NavItems";
import DrawerToggle from 'components/Navigation/SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => (
	<header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked }/>
		<div className={classes.Logo}>
			<Logo />
		</div>
		<nav className={classes.DesktopOnly}>
			<NavItems />
		</nav>
	</header>
);
export default toolbar;
