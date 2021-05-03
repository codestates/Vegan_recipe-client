import './App.css';
import { React } from 'react';
import Sidebar from './component/sidebar';
import Topbar from './component/topbar';
import Main from './component/main';
import Signup from './component/Signup'
import Login from './component/login'
import Material from './component/material'
import User from './component/user'
import Mypage from './component/Mypage';
import Recipe from './component/recipe';
import RecipeComment from './component/recipes/RecipeComment'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {

  


    return(
      <Router>
      <div className='App'>
        <Sidebar />
        <div className='right'>
          <Topbar />
            <Switch> 
              <Route exact={true} path ="/"> <Main /> </Route>
              <Route path ="/login"> <Login /> </Route>
              <Route path ='/signup' ><Signup /> </Route>
              <Route path ='/mypage' ><Mypage /> </Route>
              <Route path ="/recipecomment" component={RecipeComment} />
              <Route path ="/recipe"> <Recipe /> </Route>
              <Route path ="/material"> <Material /> </Route>
              <Route path ="/user"> <User /> </Route>
            </Switch> 
        </div>
      </div>
      </Router>
    )
  }

export default App;
