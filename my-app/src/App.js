import React from 'react'
import Login from './component/login'
import Signup from './component/signup'
import Main from './component/main'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
  <Router>
    <Login/>
  </Router>
  );
}

export default App;
