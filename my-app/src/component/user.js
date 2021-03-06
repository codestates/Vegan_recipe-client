import { Component } from "react";
import userImage from "../img/user.png";
import searcimg from "../img/search.png";
import LatestSixView from "./recipes/LatestSixView";
import RecipeComment from "./recipes/RecipeComment";
import AllUser from "./users/Alluser";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: null,
      currentUserArt: null,
      isCheck: false,
      RecipeSearchInput: null,
      isState: false,
      selectedRecipe: null,
      recipeList: ["확인"],
    };
    this.handelselectedRecipe = this.handelselectedRecipe.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  changeUser = (user) => {
    this.setState({
      currentUserName: user.name,
      currentUserArt: user.articles,
      isCheck: true,
    });
    axios
      .post("http://13.59.132.30:4000/recipe/MainRecipe", {
        user_id: this.state.currentUserName,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          recipeList: res.data.SearchRecipe,
        });
      });
  };

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handelselectedRecipe = (recipe) => {
    this.setState({ selectedRecipe: recipe, isState: true });
  };

  render() {
    const isCheck = this.state.isCheck;

    // const isCheck = false;
    const curUserInfo = {
      name: this.state.currentUserName,
      articles: this.state.currentUserArt,
    };
    return (
      <div className="RecipeContainer">
        <div className="RecipeLeftEmptyArea" />
        <div className="RecipeSearchArea">
          <div className="RecipeSearchTopEmptyArea" />
          <div className="RecipeSearchInputArea">
            <div className="RecipeSearchImageArea">
              <img alt="" className="RecipeSearchImage" src={searcimg} />
            </div>
            <div className="RecipeSearchInputTextArea">
              <input
                type="text"
                className="RecipeSearchInput"
                placeholder="찾으실 유저를 입력해주세요"
                onChange={this.handleInputValue("RecipeSearchInput")}
              />
            </div>
          </div>
          <div className="UserLeftEmptyArea" />
          {isCheck ? (
            <div className="CurUserInfoArea">
              <img src={userImage} alt="" className="CurUserImage" />
              <div className="CurUserInfoEmptyArea" />
              <div className="CurUserInfoNameArea">
                <span className="CurUserName">{curUserInfo.name}</span>
                <span className="CurUserArticles">{curUserInfo.articles}</span>
              </div>
            </div>
          ) : (
            <div className="CurUserInfoArea"></div>
          )}
        </div>
        <div className="RecipeMidEmptyArea" />
        <div className="RecipeRightArea">
          <div className="RecipeRightEmptyArea" />
          {/* 최근 등록된 레시피 출력 ! 조건문으로 스테이트에 따라 레시피 조회창으로 이동 */}
          {/* <RecipeComment /> */}
          {isCheck ? (
            this.state.isState ? (
              <RecipeComment value={this.state.selectedRecipe} />
            ) : (
              <LatestSixView
                value={this.state.currentUserName}
                list={this.state.recipeList}
                function={this.handelselectedRecipe}
              />
            )
          ) : (
            <AllUser
              changeUser={this.changeUser}
              value={this.state.RecipeSearchInput}
            />
          )}
        </div>
      </div>
    );
  }
}
export default User;
