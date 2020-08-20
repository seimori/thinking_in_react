import React from 'react';

function StockedButton(props) {

	return (
		<div>
			<input type="checkbox" id="stocked-button"
				onChange={props.toggleFiltered} />
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
				toggleFiltered={props.toggleFiltered}
			/>
		</div>
	);
}

export default SearchBar;