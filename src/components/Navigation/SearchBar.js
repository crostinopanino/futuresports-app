import React, { Component } from "react";

const withSearchBar = (OriginalComponent) => {
  return class extends Component {
    state = { searchTerm: '' };

    handleSearch = event => {
      this.setState({ searchTerm: event.target.value });
    };

    handleSearchSubmit = (searchTerm) => {

    if (this.props.onSearchSubmit) {
        this.props.onSearchSubmit(searchTerm);
      } else {
        // Default action if onSearchSubmit is not provided
        const section = document.getElementById(searchTerm);
        if(section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    render() {
      return (
        <OriginalComponent
        searchTerm={this.state.searchTerm}
        handleSearch={this.handleSearch}
        onSearchSubmit={this.handleSearchSubmit}
            {...this.props}
         />
      );
    }
  }
}

export default withSearchBar;