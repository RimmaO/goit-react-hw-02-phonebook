import PropTypes from 'prop-types';

const Filter = ({ handleChangeFilter, value }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <label>
        <input
          onChange={handleChangeFilter}
          value={value}
          type="text"
          name="filter"
          placeholder="Enter a contact name"
          pattern="[A-Za-z0-9]+"
          title="Name may contain only letters, apostrophe, dash and spaces.For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
