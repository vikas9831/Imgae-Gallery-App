import React from 'react';
import SearchForm from './SearchForm';
import Nav from './Nav';

const Header = ({ search, paths }) => {
	return (
		<div className='header'>
			<h2>React Gallery</h2>
			<SearchForm onSearch={search} />
			<Nav onClick={search} paths={paths} />
		</div>
	);
};

export default Header;