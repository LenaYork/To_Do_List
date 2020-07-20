import React from 'react';
import './App.css';
import {Control} from './Components/Control';
import {Input} from './Components/Input';
import {List} from './Components/List';

function App() {
  return (
    <div className="app">
    <h1>To-Do List</h1>
     <Control />
     <Input />
     <List />
    </div>
  );
}

export default App;
