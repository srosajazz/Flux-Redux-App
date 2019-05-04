import React from 'react';
import './config/ReacotronConfig';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';

console.tron.log('Hello Sergio');

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
