import React, { useEffect } from 'react';
import Loading from '../../Spinner/Spinner';

const WaitersList = ({ isLoading, fetchData, waiters, deleteWaiter, addWaiter }) => {
  useEffect(() => {
    fetchData('/waiters');
  }, []);

  return isLoading ? (
    <Loading></Loading>
  ) : (
    <div>
      <ul>
        {waiters.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default WaitersList;
