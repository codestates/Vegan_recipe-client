import Latest from "../component/recipes/Latest";
import Popular from "./recipes/Popular";
import MainViewRecipe from "./recipes/MainViewRecipe";
import TopContributors from "./users/TopContributors";
import { Link } from "react-router-dom";
import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="mainmargin" />
      <div className="midarea">
        <div className="midmargin" />
        <div className="midcontent">
          <TopContributors />
          <Popular />
          <Link
            to="/recipecomment"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            <MainViewRecipe />{" "}
          </Link>
        </div>
        <div className="midcontent">
          <Latest />
        </div>
        <div className="midmargin" />
      </div>
      <div className="mainmargin" />
    </div>
  );
}

export default Main;
