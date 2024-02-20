import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContentList from './ContentList';
import { TodoList } from './TodoList';

function App() {
  return (
    <div className="App">
     {/* <ContentList /> */}
     <TodoList />
    </div>
  );
}

export default App;
