import React from "react";
import classes from "components/Navigation/SideDrawer/SideDrawer.module.css";
import Logo from "components/Logo/Logo";
import NavItems from "components/Navigation/NavItems/NavItems";
import Backdrop from 'components/UI/Backdrop/Backdrop'
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

	return (
        <>
        <Backdrop show={props.show} toggle={props.toggle}/>
		<div className={attachedClasses.join(' ')}>
			<div className={classes.Logo}> <Logo />
                </div>
			<nav>
				<NavItems></NavItems>
			</nav>
		</div>
        </>
	);
};
export default sideDrawer;
