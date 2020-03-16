import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import WaitersList from './WaitersList/ReduxWrapper';

const Waiters = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/`} component={WaitersList}></Route>
    </Switch>
  );
};

export default Waiters;
