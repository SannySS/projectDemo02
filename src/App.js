import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
