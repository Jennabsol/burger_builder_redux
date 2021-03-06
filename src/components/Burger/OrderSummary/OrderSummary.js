import React from "react";
import Button from "components/UI/Button/Button";
// import classes from 'components/Burger/OrderSummary/OrderSummary.module.css';

class OrderSummary extends React.Component {
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(
			(igKey) => {
				return (
					<li key={igKey}>
						<span style={{ textOrientation: "capitalize" }}>
							{igKey}: {this.props.ingredients[igKey]}
						</span>
					</li>
				);
			}
		);

		return (
			<>
				<h3> Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: ${this.props.price.toFixed(2)}</strong>
				</p>
				<p>Continue to Checkout?</p>
				<Button btnType={"Danger"} clicked={this.props.toggle}>
					CANCEL
				</Button>
				<Button btnType={"Success"} clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</>
		);
	}
}

export default OrderSummary;
