import Latest from "../component/recipes/Latest";
import Popular from "./recipes/Popular";
import MainViewRecipe from "./recipes/MainViewRecipe";
import TopContributors from "./users/TopContributors";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateRecipeList } from '../actions/index'
import React from 'react';


function Main () {

  // let result

  // //axios로 recipe 전체 데이터 받아와서 result 에 할당 

  // const dispatch = useDispatch();
  // dispatch(updateRecipeList(result))


    return(
    <div className="main">
    <div className="mainmargin" />
    <div className="midarea">
        <div className="midmargin"/>
        <div className="midcontent">
          <TopContributors/>
          <Popular/>
          <Link to='/recipecomment' style={{ color: 'inherit', textDecoration: 'none' }} > <MainViewRecipe/> </Link>
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


export default Main;