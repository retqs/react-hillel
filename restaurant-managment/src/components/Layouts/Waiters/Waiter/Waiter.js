import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, { id }) => {
  return {
    waiter: state.waiter.find(item => item.id === id)
  };
};

const Waiter = ({ waiter }) => {
  return (
    <div>
      <h2>Waiter blaut</h2>
    </div>
  );
};

export default connect(mapStateToProps)(Waiter);
