import React from "react";
import classes from "components/Burger/Burger.module.css";
import BurgerIngredient from "components/Burger/BurgerIngredient/BurgerIngredient";

const burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map((igkey) => {
			return [...Array(props.ingredients[igkey])].map((_, index) => {
				return <BurgerIngredient key={igkey + index} type={igkey} />;
			});
		})
		.reduce((acc, currentItem) => {
			return acc.concat(currentItem);
		}, []);
	if (transformedIngredients.length === 0) {
		transformedIngredients = (
			<div>
				<p>Please start adding ingredients!</p>
			</div>
		);
	}
	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{transformedIngredients}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};

export default burger;
