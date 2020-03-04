import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import GroupsLayout from './components/Layouts/GroupsLayout';
import StudentsList from './components/Layouts/StudentsLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/groups' component={GroupsLayout}></Route>
        <Route path='/students' component={StudentsList}></Route>
      </Switch>
    </Router>
  );
}

export default App;
