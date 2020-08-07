import React from 'react';

function ProductCategoryRow(props) {
	let categories = [];
	props.json_api.forEach(element => {
		if (categories.indexOf(element.category) === -1) {
			categories.push(element.category);
		}
	})
	return (
		<>
			{categories.map(category => {
				return <td key={category}>{category}</td>;
			})}
		</>
	);
}

function ProductTable(props) {
	return (
		<div>
			<h1>ProductTable</h1>
			<p>{JSON.stringify(props.json_api, null, 2)}</p>
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
					<tr>
						<ProductCategoryRow json_api={props.json_api} />
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default ProductTable;