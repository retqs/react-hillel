import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, { id }) => {
  console.log(state);
  console.log(id);
  return {
    table: state.tables.tables.find(item => item.id === id)
  };
};

const Table = ({ table }) => {
  return (
    <div>
      <h2>{table.name}</h2>
    </div>
  );
};

export default connect(mapStateToProps)(Table);
