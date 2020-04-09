import React from "react";
import classes from "components/Burger/BuildControls/BuildControls.module.css";
import BuildControl from "components/Burger/BuildControls/BuildControl/BuildControl";

const controls = [
	{ label: "Salad", type: "salad" },
	{ label: "Bacon", type: "bacon" },
	{ label: "Cheese", type: "cheese" },
	{ label: "Meat", type: "meat" },
];
const buildControls = (props) => {
	return (
		<div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
			{controls.map((control) => {
				return <BuildControl key={control.label} label={control.label} added={ () => props.addIngredient(control.type)}
                deducted={()=>props.deductIngredient(control.type)}
                disabled={props.disabled[control.type]}/>;
			})}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
		</div>
	);
};

export default buildControls;
