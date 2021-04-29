import { Component } from "react";
import Latest from "./recipe/Latest";
import Popular from "./recipe/Popular";
import ViewRecipe from "./recipe/Viewrecipe";
import UserMinimun from "./users/Userlistminimum";

class main extends Component {

  render() {
    return(
      <div className='main'>
        <div className='upside'>
          <UserMinimun />
          <Popular />
          <ViewRecipe />
        </div>
        <div className='downside'>
          <Latest />
        </div>
      </div>
    );
  }
}

export default main;