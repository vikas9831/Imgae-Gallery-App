import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ( {onClick, paths } ) => {  
  	return (
	    <ul className="main-nav">
	      <li><NavLink to={paths[0]} onClick={() => onClick('daft punk')}>Daft</NavLink></li>
	      <li><NavLink to={paths[1]} onClick={() => onClick('night sky')}>Night</NavLink></li>
	      <li><NavLink to={paths[2]} onClick={() => onClick('rain forest')}>World</NavLink></li>
	    </ul>
	);  
};

export default Nav;