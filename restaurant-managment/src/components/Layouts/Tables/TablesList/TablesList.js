import React, { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Loading from '../../Spinner/Spinner';

const TablesList = ({ isLoading, fetchData, tables, deleteTable, addTable }) => {
  const { url } = useRouteMatch();

  useEffect(() => {
    fetchData('/tables');
  }, []);

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <div className='listWrapper'>
      <h2>Available Tables</h2>
      <span className='addNew'>
        <Link to={`${url}/new`}>new</Link>
      </span>
      <ul className='list'>
        {tables.map(table => {
          return (
            <li className='tableListItem' key={table.id}>
              <div className='tableName'>
                Table:
                <Link to={`${url}/${table.id}`}> {table.name}</Link>
              </div>
              <article className='tableInfo'>
                <h4>
                  Sits: <span>{table.sits}</span>
                </h4>

                <h4>
                  Description: <span>{table.description}</span>
                </h4>
              </article>
              <span className='dltBtn' onClick={() => deleteTable(table.id)}>
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TablesList;
