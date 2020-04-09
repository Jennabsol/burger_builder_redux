import React from "react";
import classes from "components/UI/Modal/Modal.module.css";
import Backdrop from "components/UI/Backdrop/Backdrop";

class Modal extends React.Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show;
	}
	render() {
		return (
			<>
				<Backdrop
					show={this.props.show}
					toggle={this.props.toggleModal}
				/>
				<div
					className={classes.Modal}
					style={{
						transform: this.props.show
							? "translateY(0)"
							: "translate(-100vh)",
						opacity: this.props.show ? "1" : "0",
					}}>
					{this.props.children}
				</div>
			</>
		);
	}
}

export default Modal;
