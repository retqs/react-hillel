import React from 'react';
import { connect } from 'react-redux';
import { editTable } from '../../../../store/actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, { id }) => {
  return {
    table: state.tables.tables.find(item => item.id === id)
  };
};

const mapDispatchToProps = {
  editTable
};

const Table = ({ table, editTable }) => {
  const { name, sits, description } = table;

  const handleChange = e => {
    const target = e.target;

    editTable({
      ...table,
      [target.name]: target.value
    });
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <label className='label'>
          Name:
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <label className='label'>
          Sits:
          <input type='number' name='sits' value={sits} onChange={handleChange} />
        </label>
        <label className='label'>
          Description:
          <input type='text' name='description' value={description} onChange={handleChange} />
        </label>
        <Link to='/tables'>Ok</Link>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
