import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
  
  state = {
    input: ''
  }
  
  onSearchChange = e => {
    this.setState({ input: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    //If input blank, message appears. Otherwise, path is pushed, onSearch fires and input resets
    if(this.query.value === ""){
      alert('Please enter something to search for.');  
    }else{
      let path = `/search/${this.query.value}`;
      this.props.history.push(path);
      this.props.onSearch(this.query.value, 'searched');
      e.currentTarget.reset();
    }
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

export default withRouter(SearchForm);