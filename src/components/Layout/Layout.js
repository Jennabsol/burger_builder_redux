import React from "react";
import classes from "components/Layout/Layout.module.css";
import Toolbar from "components/Navigation/Toolbar/Toolbar";
import SideDrawer from "components/Navigation/SideDrawer/SideDrawer";
class Layout extends React.Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerToggle = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
	render() {
		return (
			<>
				<Toolbar toggle={this.sideDrawerToggle}/>
				<SideDrawer show={this.state.showSideDrawer}toggle={this.sideDrawerToggle} />
				<main className={classes.content}>{this.props.children}</main>
			</>
		);
	}
}
export default Layout;
