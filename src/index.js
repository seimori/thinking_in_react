import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// ==================================================



// ==================================================

function ProductInterface(props) {
	const [json, setJson] = useState(props.json_api);
	return (
		<div>
			< SearchBar
				json={json}
				setJson={setJson}
			/>
			< ProductTable json_api={json} />
		</div>
	);
}

function APP(props) {
	return (
		<>
			< ProductInterface json_api={props.json_api} />
		</>
	);
}

// ==================================================

const json_api = [
	{ category: "Sporting Goods", price: "49.99", stocked: true, name: "Football" },
	{ category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
	{ category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
	{ category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
	{ category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
	{ category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

ReactDOM.render(
	<APP json_api={json_api} />,
	document.getElementById('root')
);