import React from "react";
import classes from "components/Navigation/SideDrawer/SideDrawer.module.css";
import Logo from "components/Logo/Logo";
import NavItems from "components/Navigation/NavItems/NavItems";
import Backdrop from 'components/UI/Backdrop/Backdrop'
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    // <SideDrawer
    //                 open={this.state.showSideDrawer}
    //                 closed={this.sideDrawerClosedHandler} />
    //             <main className={classes.Content}>
    //                 {this.props.children}
    //             </main>

	return (
        <>
        <Backdrop show={props.open} toggle={props.closed}/>
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
