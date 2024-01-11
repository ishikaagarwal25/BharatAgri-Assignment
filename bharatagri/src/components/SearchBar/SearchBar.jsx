import React from 'react';
import './SearchBar.css';

const SearchBar = ({ query, setQuery }) => {
	return (
		<div className='search-container'>
			<input
				placeholder='Search by crop name...'
				value={query}
				onChange={(e) => setQuery(e.target.value.trim().toLowerCase())}
			/>
		</div>
	);
};

export default SearchBar;
