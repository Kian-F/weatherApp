import React, { Component } from "react";

class SearchForm extends Component {
  constructor() {
    super();
    this.state = { query: " " };
  }

  _handleInput(event) {
    this.setState({ query: event.target.value });
  }
  _handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state.query)
  }
    
        render() {
            return (
              <form onSubmit={this._handleSubmit}>
                <input type="search" onInput={this._handleInput} required placeholder="Sydney" />
                <button type="submit">search</button>
              </form>
            );
          }
    }
export default SearchForm;
