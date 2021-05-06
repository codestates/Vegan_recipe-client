import axios from "axios";
import { Component } from "react";
import searcimg from "../img/search.png";
import LatestSixView from "./recipes/LatestSixView";
import RecipeComment from "./recipes/RecipeComment";

class Recipe extends Component {
  constructor(props) {
    // this.isCheckState = isCheckState;/
    super(props);
    this.state = {
      RecipeSearchInput: "",
      selectedRecipe: "",
      isState: false,
      recipeList: ["확인"],
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.requestRecipe = this.requestRecipe.bind(this);
    this.appKeyPress = this.appKeyPress.bind(this);
    this.handelselectedRecipe = this.handelselectedRecipe.bind(this);
  }

  componentDidMount() {
    this.requestRecipe();
  }

  requestRecipe = () => {
    axios
      .post("http://13.59.132.30:4000/recipe/SearchByRecipeName", {
        title: this.state.RecipeSearchInput,
      })
      .then((res) =>
        this.setState({
          recipeList: res.data.SearchTitle,
        })
      );
  };

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value, isState: false });
  };

  handelselectedRecipe = (recipe) => {
    this.setState({ selectedRecipe: recipe, isState: true });
  };

  requestRecipe = () => {
    axios
      .post("http://13.59.132.30:4000/recipe/SearchByRecipeName", {
        title: this.state.RecipeSearchInput,
      })
      .then((res) =>
        this.setState({
          recipeList: res.data.SearchTitle,
        })
      );
  };

  appKeyPress = (key) => (e) => {
    if (e.key === "Enter") {
      this.requestRecipe();
    }
  };

  render() {
    console.log(this.state.isState, this.state.selectedRecipe);
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
                placeholder="찾으실 레시피를 입력해주세요"
                onChange={this.handleInputValue("RecipeSearchInput")}
                onKeyPress={this.appKeyPress("RecipeSearchInput")}
              />
            </div>
          </div>
        </div>
        <div className="RecipeMidEmptyArea" />
        <div className="RecipeRightArea">
          <div className="RecipeRightEmptyArea" />
          {/* 최근 등록된 레시피 출력 ! 조건문으로 스테이트에 따라 레시피 조회창으로 이동 */}
          {this.state.isState ? (
            <RecipeComment value={this.state.selectedRecipe} />
          ) : (
            <LatestSixView
              value={this.state.RecipeSearchInput}
              list={this.state.recipeList}
              function={this.handelselectedRecipe}
            />
          )}
          {/* <LatestSixView value={this.state.RecipeSearchInput}/> */}
          {/* <RecipeComment /> */}
        </div>
      </div>
    );
  }
}

export default Recipe;
