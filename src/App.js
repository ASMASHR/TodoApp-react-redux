import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ToDoList from './components/ToDoList'
import CompletedTask from './components/CompletedTask'
import { BrowserRouter, Route,Switch } from 'react-router-dom'
import NotCompletedTask from './components/NotCompletedTask'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="container-App">
      <NavBar/>
        <Switch>
          <Route exact path="/" >
            <ToDoList />
          </Route>
          <Route path="/Completed-Tasks">
            <CompletedTask/>
          </Route>
          <Route path="/Not-Completed-Tasks">
            <NotCompletedTask/>
          </Route>
        </Switch>
      
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
