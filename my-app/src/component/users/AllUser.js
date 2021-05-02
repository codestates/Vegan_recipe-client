import { Component } from "react";
import userImage from "../../img/user.png";

class AllUser extends Component {
  render() {
    const userTempData = [
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
    ];
    const UsersAreaHeight = (Math.ceil(userTempData.length / 4)) * 90;

    return (
      <div className="AllUserContainer">
        <div className="LatestSixHeader">
          <span className="LatestSixHeaderTitle">Users</span>
        </div>
        <div className="AllUserPrintArea" style={{width: 1200, height: {UsersAreaHeight}, display: "flex", "flex-wrap": "wrap"}}>
          {userTempData.map((data, idx) => (
            <div className="UserInfoPrint">
              <div className="CurUserInfoArea">
                <img src={userImage} alt="" className="CurUserImage" />
                <div className="CurUserInfoEmptyArea" />
                <div className="CurUserInfoNameArea">
                  <span className="CurUserName">{data.name}</span>
                  <span className="CurUserArticles">
                    {data.articles}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default AllUser;
