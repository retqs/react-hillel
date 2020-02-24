import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import TodoList from './components/TodoList/TodoReduxWrapper';
import Modal from './components/Modal/ModalReduxWrapper';

function App() {
  return (
    <Provider store={store}>
      <TodoList></TodoList>
      <Modal></Modal>
    </Provider>
  );
}

export default App;
