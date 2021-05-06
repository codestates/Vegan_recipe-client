import { Component } from "react";
import userImage from "../../img/user.png";

class AllUser extends Component {
  constructor(props) {
    super(props);

}

  render() {
    let result
    const userTempData = [
      { name: "giseok5327@gmail.com", articles: 130 },
      { name: "KimLucky1", articles: 112 },
      { name: "KimLucky2", articles: 123 },
      { name: "KimLucky3", articles: 122 },
      { name: "KimLucky4", articles: 156 },
      { name: "KimLucky5", articles: 123 },
      { name: "KimLucky6", articles: 167 },
      { name: "KimLucky7", articles: 131 },
      { name: "KimLucky8", articles: 177 },
      { name: "KimLucky9", articles: 1 },
      { name: "kido", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "KimLucky", articles: 130 },
      { name: "kido", articles: 130 },
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

    if(this.props.value===null){
      result = userTempData 
    }
    else{
      result = userTempData.filter(el => el.name.includes(this.props.value))

    }
    const UsersAreaHeight = (Math.ceil(userTempData.length / 4)) * 90;

    return (
      <div className="AllUserContainer">
        <div className="LatestSixHeader">
          <span className="LatestSixHeaderTitle">Users</span>
        </div>
        <div className="AllUserPrintArea" style={{width: 1200, height: {UsersAreaHeight}, display: "flex", "flex-wrap": "wrap"}}>
          {result.map((data, idx) => (
            <div className="UserInfoPrint" onClick={()=>{this.props.changeUser(data)}}>
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
