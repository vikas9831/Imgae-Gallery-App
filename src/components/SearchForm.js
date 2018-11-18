import React, { Component } from 'react';

class SearchForm extends Component {
  
  state = {
    input: ''
  }
  
  onSearchChange = e => {
    this.setState({ input: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={input => this.query = input}
               placeholder="Search Images..." />
        <button type="submit" className="search-button">Search</button>
      </form>      
    );
  }
}

export default SearchForm;