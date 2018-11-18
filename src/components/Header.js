import React from 'react';
import SearchForm from './SearchForm';

const Header = ({ search }) => {
	// console.log(this.props.search);
	return (
		<div className='header'>
			<h1>React Gallery</h1>
			<SearchForm onSearch={search} />
		</div>
	);
};

export default Header;