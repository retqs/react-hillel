import PropTypes from 'prop-types';

const fnCheck = PropTypes.func;
const boolCheck = PropTypes.bool;
const objCheck = PropTypes.object;

export default {
  ...PropTypes,
  fnCheck,
  boolCheck,
  objCheck
};
