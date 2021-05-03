import './App.css';
import { Component } from 'react';
import Sidebar from './component/sidebar';
import Topbar from './component/topbar';
import Main from './component/main';
import Signup from './component/Signup'
import Mypage from './component/Mypage';
import Recipe from './component/recipe';
import Material from './component/material';
import User from './component/user';

class App extends Component {

  


  render() {
    return(
      <div className='App'>
        <Sidebar />
        <div className='right'>
          <Topbar />
          {/* <Main /> */}
          {/* <Signup /> */}
          {/* <Mypage/> */}
          {/* <Recipe/> */}
          {/* <Material/> */}
          <User />
        </div>
      </div>
    )
  }
}
export default withRouter(App);
