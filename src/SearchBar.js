import React from 'react';

function StockedButton(props) {
	const filterJson = () => {
		props.setJson(props.json.filter(row => {
			return row.stocked;
		}))
	}

	return (
		<div>
			<input type="checkbox" id="stocked-button"
				onChange={filterJson} />
			<label for="stocked-button">Only show products in stock</label>
		</div>
	);
}

function SearchBar(props) {
	return (
		<div>
			<input type="text" placeholder="Search..." />
			< StockedButton
				json={props.json}
				setJson={props.setJson}
			/>
		</div>
	);
}

export default SearchBar;