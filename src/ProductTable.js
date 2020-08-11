import React from 'react';
import './index.css';

function ProductCategoryElements(props) {
	const outOfStock = element => {
		return (element.stocked ?
			null :
			'out-of-stock'
		);
	}

	return (
		props.json_api.map(element => {
			if (element.category === props.category) {
				return (
					<>
						<tr key={element.name}>
							<td className={outOfStock(element)}>{element.name}</td>
							<td>{element.price}</td>
						</tr>
					</>
				)
			}
			else {
				return null;
			}
		})
	);
}

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
				return (
					<>
						<tr>
							<td className='category' key={category}>{category}</td>
						</tr>
						<ProductCategoryElements
							json_api={props.json_api}
							category={category}
						/>
					</>
				);
			})}
		</>
	);
}

function ProductTable(props) {
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<td className='table-header'>Name</td>
						<td className='table-header'>Price</td>
					</tr>
					<ProductCategoryRow json_api={props.json_api} />
				</tbody>
			</table>
		</div>
	);
}

export default ProductTable;