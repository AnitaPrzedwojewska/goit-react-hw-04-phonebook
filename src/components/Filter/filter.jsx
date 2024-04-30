import { nanoid } from 'nanoid';
import css from './filter.module.css';
import { PropTypes } from 'prop-types';

export const Filter = ({ filter, onFilterChange }) => {

  const searchInputId = nanoid();

  return (
    <>
      <p>Find contacts by name:</p>
      <input
        className={css.filterInput}
        type='input'
        name='filter'
        id={searchInputId}
        value={filter}
        placeholder='enter part of the name'
        onChange={onFilterChange}></input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};