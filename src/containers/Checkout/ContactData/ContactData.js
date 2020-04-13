import React, { Component } from "react";

import Button from "components/UI/Button/Button";
import Spinner from "components/UI/Spinner/Spinner";
import classes from "containers/Checkout/ContactData/ContactData.module.css";
import axios from "axios-orders";

class ContactData extends Component {
	state = {
		name: "",
		email: "",
		address: {
			street: "",
			postalCode: "",
		},
		loading: false,
	};
	onChangeHandler = (evt) => {
		const newObject = { ...this.state };
		let key = evt.target.id;
		if (key === "street" || key === "postalCode") {
			// newObject["address"]={...this.state.address}
			newObject.address[key] = evt.target.value;
		} else {
			newObject[key] = evt.target.value;
		}
		this.setState(newObject)
	};
	orderHandler = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		const order = {
			ingredients: this.props.ingredients,
			price: this.props.price,
			customer: {
				name: this.state.name,
				address: {
					street: this.state.address.street,
					zipCode: this.state.address.postalCode,
					country: "USA",
				},
				email: this.state.email,
			},
			deliveryMethod: "fastest",
		};
		axios
			.post("/orders", order)
			.then((response) => {
				this.setState({ loading: false });
				this.props.history.push("/");
			})
			.catch((error) => {
				this.setState({ loading: false });
			});
	};

	render() {
		let form = (
			<form>
				<input
					className={classes.Input}
					type="text"
					name="name"
					placeholder="Your Name"
					id="name"
					onChange={this.onChangeHandler}
				/>
				<input
					className={classes.Input}
					id="email"
					type="email"
					name="email"
					placeholder="Your Mail"
					onChange={this.onChangeHandler}
				/>
				<input
					className={classes.Input}
					type="text"
					name="street"
					id="street"
					placeholder="Street"
					onChange={this.onChangeHandler}
				/>
				<input
					className={classes.Input}
					type="text"
					name="postal"
					id="postalCode"
					placeholder="Postal Code"
					onChange={this.onChangeHandler}
				/>
				<Button btnType="Success" clicked={this.orderHandler}>
					ORDER
				</Button>
			</form>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className={classes.ContactData}>
				<h4>Enter your Contact Data</h4>
				{form}
			</div>
		);
	}
}

export default ContactData;
