import { Component } from "react";
import userImage from "../img/user.png"
import searcimg from "../img/search.png"
import LatestSixView from "./recipe/LatestSixView.js";
import RecipeComment from "./recipe/RecipeComment.js";
import AllUser from "./users/AllUser";

class User extends Component {
  render() {
    const isCheck = true;
    // const isCheck = false;
    const curUserInfo = { name : "KimLucky", articles : 135 }
    return (
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
          <div className="UserLeftEmptyArea"/>
          {isCheck ? 
          <div className="CurUserInfoArea">
            <img src={userImage} alt='' className="CurUserImage"/>
            <div className="CurUserInfoEmptyArea"/>
            <div className="CurUserInfoNameArea">
              <span className="CurUserName">{curUserInfo.name}</span>
              <span className="CurUserArticles">{curUserInfo.articles}</span>
            </div>
          </div>
          : 
          <div className="CurUserInfoArea">
          </div>
          }
        </div>
        <div className="RecipeMidEmptyArea"/>
        <div className="RecipeRightArea">
          <div className="RecipeRightEmptyArea"/>
          {/* 최근 등록된 레시피 출력 ! 조건문으로 스테이트에 따라 레시피 조회창으로 이동 */}
          {/* <LatestSixView/> */}
          {/* <RecipeComment /> */}
          <AllUser />
        </div>
      </div>
    )
  }
}
export default User;