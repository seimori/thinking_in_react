import React, { useState } from "react";
import ReactDOM from "react-dom";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

// ==================================================

// ==================================================

function ProductInterface(props) {
	const json_object = {
		full: props.json_api,
		filtered: props.json_api.filter((element) => {
			return element.stocked;
		}),
	};
	const [filtered, setFiltered] = useState(false);
	const [json, setJson] = useState(json_object.full);
	function toggleFiltered() {
		if (filtered === false) {
			setJson(json_object.filtered);
		} else {
			setJson(json_object.full);
		}
		setFiltered(!filtered);
		return json;
	}
	return (
		<div>
			<SearchBar json={json} toggleFiltered={toggleFiltered} />
			<ProductTable json_api={json} />
		</div>
	);
}

function APP(props) {
	return (
		<>
			<ProductInterface json_api={props.json_api} />
		</>
	);
}

// ==================================================

const json_api = [
	{
		category: "Sporting Goods",
		price: "49.99",
		stocked: true,
		name: "Football",
	},
	{
		category: "Sporting Goods",
		price: "$9.99",
		stocked: true,
		name: "Baseball",
	},
	{
		category: "Sporting Goods",
		price: "$29.99",
		stocked: false,
		name: "Basketball",
	},
	{
		category: "Electronics",
		price: "$99.99",
		stocked: true,
		name: "iPod Touch",
	},
	{
		category: "Electronics",
		price: "$399.99",
		stocked: false,
		name: "iPhone 5",
	},
	{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

ReactDOM.render(<APP json_api={json_api} />, document.getElementById("root"));
