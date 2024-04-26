import { Component } from 'react';
import { nanoid } from 'nanoid';
import { InputStyled } from './filter.styled';

export class Filter extends Component {

  handleChange = (event) => {
    this.props.onFilterChange(event);
  }

  searchInputId = nanoid();

  render() {
    const { filter } = this.props;
    return (
      <>
        <p>Find contacts by name:</p>
        <InputStyled
          type="input"
          name="filter"
          id={this.searchInputId}
          value={filter}
          onChange={this.handleChange}
        ></InputStyled>
      </>
    );
  }
}