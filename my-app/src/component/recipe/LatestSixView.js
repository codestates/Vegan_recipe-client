import { Component } from "react";
import imgg from "../../img/itemimg.png";

class LatestSixView extends Component {
  render() {
    const tempdata = [
      {
        tag: "FRUIT",
        time: "5 min",
        title: "Simple Juice Recipes to boost your immune system",
      },
      {
        tag: "FRUIT",
        time: "5 min",
        title: "Simple Juice Recipes to boost your immune system",
      },
      {
        tag: "FRUIT",
        time: "5 min",
        title: "Simple Juice Recipes to boost your immune system",
      },
      {
        tag: "FRUIT",
        time: "5 min",
        title: "Simple Juice Recipes to boost your immune system",
      },
      {
        tag: "FRUIT",
        time: "5 min",
        title: "Simple Juice Recipes to boost your immune system",
      },
      {
        tag: "FRUIT",
        time: "5 min",
        title: "Simple Juice Recipes to boost your immune system",
      },
    ];
    return (
      <div className="LatestSixContainer">
        <div className="LatestSixHeader">
          <span className="LatestSixHeaderTitle">Latest</span>
        </div>
        <div className="LatestSixAllPrint">
          {/* 반복문으로 스테이트에 있는 최근의 게시물 6개를 출력합니다. */}
          {tempdata.map((data, idx) => (
            <div key={idx} className="LatestOneViewArea">
              <div className="LatestOneView">
                <img alt="" src={imgg} className="LatestOneViewImage" />
                <div className="LatestOneViewEmptyArea" />
                <div className="LatestOneViewTagTime">
                  <span className="LatestOneViewTag">{data.tag}</span>
                  <div className="latelyspace" />
                  <div className="latelyLine" />
                  <div className="latelyspace" />
                  <span className="LatestOneViewTime">{data.time}</span>
                </div>
                <div className="LatestOneViewEmptyArea" />
                <div className="LatestOneViewContestView">
                  <span className="LatestOneViewTitle">{data.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default LatestSixView;