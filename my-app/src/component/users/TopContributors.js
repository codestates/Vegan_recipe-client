import { Component } from "react";
import imgg from "../../img/user.png";

class TopContributors extends Component {
  render() {
    const tempdata = [
      { name: "kimlucky", article: 130 },
      { name: "kimlucky", article: 130 },
      { name: "kimlucky", article: 130 },
      { name: "kimlucky", article: 130 },
    ];
    return (
      <div className="TopContributors">
        <div className="ContributorsHeader">
          <span className="ContributorsTitle">Top Contributors</span>
          <div className="ContributorsTitleSpace" />
          {tempdata.map((data, idx) => (
            <div key={idx} className="ContributorsUserlist">
              <img className="ContributorsUserImage" src={imgg} alt="" />
              <div className="ContributorsSpace" />
              <div className="ContributorsUserInfo">
                <div className="ContributorsUserSpace" />
                <span className="ContributorsUserName">{data.name}</span>
                <span className="ContributorsUserArticle">
                  {data.article} article
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TopContributors;
