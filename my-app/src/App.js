import './App.css';
import { Component } from 'react';
import Sidebar from './component/sidebar';
import Topbar from './component/topbar';
import Main from './component/main';
import Signup from './component/Signup'
import Mypage from './component/Mypage';
import Recipe from './component/recipe';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class App extends Component {

  


  render() {
    return(
      <div className='App'>
        <Sidebar />
        <div className='right'>
          <Topbar />
            <Switch> {/* 메인 페이지의 변화 */}
          {/* <Route path ='/' render={()=> (<Main />)} */}
          {/* <Route path ='/signup' render={()=> <Signup />)} */}
          {/* <Route path ='/mypage' render={()=> <Mypage/>)} */}
            </Switch>
          <Recipe/>
        </div>
      </div>
    )
  }
}
export default withRouter(App);
