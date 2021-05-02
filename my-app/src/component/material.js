import { Component } from "react";
import LatestSixView from "./recipe/LatestSixView";
import RecipeComment from "./recipe/RecipeComment";

class Material extends Component {
  render() {
    const materialTempdata = [
      "Apple", "Banana", "Lemon", "Carrot", "Onion", "Potato", "Pumpkin", "Lettuce", "Paprika"
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
                  <input type="checkbox" className="MaterialCheckBox"/>
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
          <LatestSixView/>
          {/* <RecipeComment /> */}
        </div>
      </div>
    );
  }
}
export default Material;