import React from 'react';
import SearchForm from './SearchForm';

const Header = ({ search }) => {
	// console.log(this.props.search);
	return (
		<div className='header'>
			<h2>React Gallery</h2>
			<SearchForm onSearch={search} />
		</div>
	);
};

export default Header;