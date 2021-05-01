import { Component } from "react";
import Latest from "./recipes/Latest";
import Popular from "./recipes/Popular";
import MainViewRecipe from "./recipes/MainViewRecipe";
import TopContributors from "./users/TopContributors";
import { Link } from 'react-router-dom';


function main () {


    return(
      <div className="main">
    <div className="mainmargin" />
    <div className="midarea">
        <div className="midmargin"/>
        <div className="midcontent">
          <TopContributors/>
          <Popular/>
          <Link to='/recipecomment'> <MainViewRecipe/> </Link>
        </div>
        <div className="midcontent">
          <Latest />
        </div>
        <div className="midmargin"/>
    </div>
    <div className="mainmargin" />
</div>
    );
  }


export default main;