import PropTypes from 'prop-types';

const selectedContactShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
});

const selectedContact = PropTypes.objectOf(selectedContactShape);

const fnCheck = PropTypes.func;
const boolCheck = PropTypes.bool;

const contactShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
});

const contact = PropTypes.objectOf(contactShape);

const contactsShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  age: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired
});

const contacts = PropTypes.arrayOf(contactsShape);

export default {
  ...PropTypes,
  selectedContact,
  fnCheck,
  boolCheck,
  contact,
  contacts
};
