import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import WaitersList from './WaitersList/ReduxWrapper';
import Waiter from './Waiter/Waiter';

const Waiters = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/`} component={WaitersList}></Route>
      <Route path={`${path}/:id`} render={({ match }) => <Waiter id={match.params.id}></Waiter>}></Route>
    </Switch>
  );
};

export default Waiters;
