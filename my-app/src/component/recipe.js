import { Component } from "react";
import searcimg from "../img/search.png"
import LatestSixView from "./recipe/LatestSixView";
import RecipeComment from "./recipe/RecipeComment";


function Recipe () {


    return(
      <div className="RecipeContainer">
        <div className="RecipeLeftEmptyArea"/>
        <div className="RecipeSearchArea">
          <div className="RecipeSearchTopEmptyArea"/>
          <div className="RecipeSearchInputArea">
            <div className="RecipeSearchImageArea">
              <img alt='' className="RecipeSearchImage" src={searcimg}/>
            </div>
            <div className="RecipeSearchInputTextArea">
              <input type="text" className="RecipeSearchInput" placeholder="찾으실 레시피를 입력해주세요"/>
            </div>
          </div>
        </div>
        <div className="RecipeMidEmptyArea"/>
        <div className="RecipeRightArea">
          <div className="RecipeRightEmptyArea"/>
          {/* 최근 등록된 레시피 출력 ! 조건문으로 스테이트에 따라 레시피 조회창으로 이동 */}
          {/* <LatestSixView/> */}
          <RecipeComment />
        </div>
      </div>
    )
  }

export default Recipe;