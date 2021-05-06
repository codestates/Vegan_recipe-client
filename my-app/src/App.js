import './App.css';
import { React, Component } from 'react';
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
import axios from 'axios';

class  App extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLogin : false,
      actoken : null
    }


    this.logoutHandler = this.logoutHandler.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
  }

  loginHandler  = (data)=>{
    this.setState({
      isLogin : true,
      actoken : data
    })
  }

  logoutHandler =()=>{
    axios.post("http://13.59.132.30:4000/users/logout")
    .then(res=>{
      this.setState({
        isLogin : false,
        actoken : null
      })
    })
  }



render(){
    return(
      <Router>
      <div className='App'>
        <Sidebar />
        <div className='right'>
          <Topbar logoutHandler={this.logoutHandler} value ={this.state.isLogin}/>
            <Switch> 
              <Route exact={true} path ="/"> <Main /> </Route>
              <Route exact path ="/login" render={() =><Login loginHandler={this.loginHandler}/>}/>
              <Route path ='/signup' render={() =><Signup />}/> 
              <Route path ='/mypage' ><Mypage actoken={this.state.actoken}/> </Route>
              <Route path ="/recipecomment"> <RecipeComment /> </Route>
              {/* <Route path ="/recipe/recipecomment" render={() =><Recipe />}/>  */}
              <Route path ="/recipe"> <Recipe /> </Route>
              <Route path ="/material"> <Material /> </Route>
              <Route path ="/user"> <User /> </Route>
            </Switch> 
        </div>
      </div>
      </Router>
    )
  }
}

export default App;
