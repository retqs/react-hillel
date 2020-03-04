import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StudentsList from '../StudentsLayout/StudentsList/ReduxStudList';
import AddStudent from '../StudentsLayout/AddStudent/ReduxWrapAddStudent';

const index = () => {
  return (
    <Switch>
      <Route exact path='/students' component={StudentsList}></Route>
      <Route exact path='/students/newStudent' component={AddStudent}></Route>
    </Switch>
  );
};

export default index;
