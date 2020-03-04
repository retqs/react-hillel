import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Groups from './GroupsList/ReduxWrapper';
import Group from './Group/Group';
import BackBtn from '../Buttons/BackBtn';

const GroupsList = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <BackBtn></BackBtn>
      <Switch>
        <Route exact path={path} component={Groups}></Route>
        <Route path={`${path}/:id`} render={({ match }) => <Group id={match.params.id}></Group>}></Route>
      </Switch>
    </>
  );
};

export default GroupsList;
