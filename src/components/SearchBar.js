import React, { Component } from "react";
import { Paper, TextField } from "@material-ui/core";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);
    event.preventDefault();
  };

  render() {
    return (
      <Paper elevation={1}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Pesquisar..."
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
