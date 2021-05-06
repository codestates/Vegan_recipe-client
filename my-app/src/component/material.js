import { Component } from "react";
import LatestSixView from "./recipes/LatestSixView";
import RecipeComment from "./recipes/RecipeComment";
import axios from "axios";

class Material extends Component {
    constructor(props) {
        super(props)
        this.state = {
        RecipeSearchInput: "",
        isState:false,
        selectedRecipe : "",
        recipeList: ['확인']
        };

        this.requestRecipe = this.requestRecipe.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.handelselectedRecipe = this.handelselectedRecipe.bind(this);
    }

    componentDidMount() {
        this.requestRecipe();
        }


    handelselectedRecipe = (recipe)=>{
        this.setState(
        {selectedRecipe : recipe,
        isState:true
        })
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
        axios.post("http://13.59.132.30:4000/recipe/SearchByRecipeName", {title:this.state.RecipeSearchInput})
        .then(res => 
          this.setState({
            recipeList : res.data.SearchTitle
          }))
    };

    requestRecipe = ()=>{
        axios.post("http://13.59.132.30:4000/recipe/SearchByRecipeName", {title:this.state.RecipeSearchInput})
        .then(res => 
          this.setState({
            recipeList : res.data.SearchTitle
          }))
      }



    
render() {
    const materialTempdata = [
    "Apple", "Banana", "cheese", "Carrot", "Onion", "Potato", "Pumpkin", "Lettuce", "Paprika"
    ]
    const matirialsAreaHeight = (Math.ceil(materialTempdata.length / 3)) * 40
    return (
    <div className="MaterialContainer">
        <div className="MaterialLeftEmptyArea"/>
        <div className="MaterialSearchArea">
        <div className="MaterialSearchTopEmptyArea"/>
        <div className="MaterialSearchInputArea" style={{width: 320, height: {matirialsAreaHeight}, display: "flex", "flex-wrap": "wrap"}}>
            {materialTempdata.map((data,idx) => (
            <div className="MaterialOneViewArea" key={idx}>
                <div className="MaterialOneInfo">
                <input type="checkbox" className="MaterialCheckBox" value={data} onClick={this.handleInputValue("RecipeSearchInput")}/>
                <div className="MaterialInfoEmptyArea"/>
                <div className="MaterialInfoTitleArea">
                    <span className="MaterialInfoTitle">{data}</span>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
        <div className="RecipeMidEmptyArea"/>
        <div className="RecipeRightArea">
        <div className="RecipeRightEmptyArea"/>
          {/* 최근 등록된 레시피 출력 ! 조건문으로 스테이트에 따라 레시피 조회창으로 이동 */}
        {this.state.isState ? <RecipeComment value={this.state.selectedRecipe}/> : <LatestSixView value={this.state.RecipeSearchInput} list={this.state.recipeList} function={this.handelselectedRecipe}/>}
          {/* <RecipeComment /> */}
        </div>
    </div>
    );
}
}
export default Material;