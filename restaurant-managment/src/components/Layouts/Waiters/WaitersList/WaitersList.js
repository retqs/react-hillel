import React, { useEffect } from 'react';
import Loading from '../../Spinner/Spinner';

const WaitersList = ({ isLoading, fetchData, waiters, editWaiter, deleteWaiter, addWaiter, search, searchWaiter }) => {
  useEffect(() => {
    fetchData('waiters/');
  }, []);

  const handleChange = (e, waiter) => {
    const target = e.target;
    editWaiter({
      ...waiter,
      [target.name]: target.value
    });
  };

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <div className='waitersWrapper'>
      <div className='addNew' onClick={() => addWaiter()}>
        <span>Add new</span>
      </div>
      <nav className='searchBar'>
        <input placeholder='Search for the...' value={search} onChange={e => searchWaiter(e.target.value)}></input>
      </nav>
      <ul className='list'>
        {waiters.map(item => {
          return (
            <li key={item.id} className='listItem'>
              <div className='row'>
                <label>
                  Name:
                  <input type='text' name='name' value={item.name} onChange={e => handleChange(e, item)}></input>
                </label>
                <label>
                  Salary:
                  <input type='number' name='salary' value={item.salary} onChange={e => handleChange(e, item)}></input>
                </label>
                <span>StartDate: {item.startDate}</span>
              </div>
              <span className='dltBtn' onClick={() => deleteWaiter(item.id)}>
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WaitersList;
