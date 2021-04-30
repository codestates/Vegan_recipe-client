import { Component } from "react";
import Latest from "./recipe/Latest";
import Popular from "./recipe/Popular";
import MainViewRecipe from "./recipe/MainViewRecipe";
import TopContributors from "./users/TopContributors";

function main () {


    return(
      <div className="main">
    <div className="mainmargin" />
    <div className="midarea">
        <div className="midmargin"/>
        <div className="midcontent">
          <TopContributors/>
          <Popular/>
          <MainViewRecipe/>
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