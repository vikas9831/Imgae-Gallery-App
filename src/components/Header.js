// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';

const Header = ({ paths, onSearch }) => (
  <header className="header">
    <div className="logo">
      <NavLink exact to="/">
        React Gallery App
      </NavLink>
    </div>
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        {paths.map((path, index) => (
          <li key={index}>
            <NavLink exact to={`/${path}`} activeClassName="active">
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <SearchForm onSearch={onSearch} />
  </header>
);

export default Header;
