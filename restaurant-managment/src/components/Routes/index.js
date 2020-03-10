import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Tables from '../Layouts/Tables/Tables';
import Waiters from '../Layouts/Waiters/Waiters';

import Menu from '../Layouts/Menu/Menu';

function Routes() {
  return (
    <>
      <Menu></Menu>
      <Switch>
        <Route exact path='/tables' component={Tables}></Route>
        <Route path='/waiters' component={Waiters}></Route>
        {/* <Route path='*'>
          <Redirect to='/tables'></Redirect>
        </Route> */}
      </Switch>
    </>
  );
}

export default Routes;
