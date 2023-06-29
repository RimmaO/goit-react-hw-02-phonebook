import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <p>{title}</p> {children}
    </>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
