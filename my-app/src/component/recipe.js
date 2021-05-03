import { Component } from "react";
import searcimg from "../img/search.png"
import LatestSixView from "./recipes/LatestSixView";


class Recipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      RecipeSearchInput: null
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
 
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };


    

render(){
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
              <input type="text" className="RecipeSearchInput" placeholder="찾으실 레시피를 입력해주세요" onChange={this.handleInputValue("RecipeSearchInput")}/>
            </div>
          </div>
        </div>
        <div className="RecipeMidEmptyArea"/>
        <div className="RecipeRightArea">
          <div className="RecipeRightEmptyArea"/>
          {/* 최근 등록된 레시피 출력 ! 조건문으로 스테이트에 따라 레시피 조회창으로 이동 */}
          <LatestSixView value={this.state.RecipeSearchInput}/>
          {/* <RecipeComment /> */}
        </div>
      </div>
    )
  }
}

export default Recipe;