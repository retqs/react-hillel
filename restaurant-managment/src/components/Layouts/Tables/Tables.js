import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import TablesList from './TablesList/ReduxWrapper';
import Table from './Table/Table';

const newTable = () => {
  return (
    <div className=''>
      <h2>new table</h2>
    </div>
  );
};

const Tables = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={TablesList}></Route>
      <Route path={`${path}/:id`} render={({ match }) => <Table id={match.params.id}></Table>}></Route>
      <Route path={`${path}/new`} component={newTable}></Route>
    </Switch>
  );
};

export default Tables;
