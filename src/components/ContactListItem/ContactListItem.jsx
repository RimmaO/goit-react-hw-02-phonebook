import PropTypes from 'prop-types';

const ContactListItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
