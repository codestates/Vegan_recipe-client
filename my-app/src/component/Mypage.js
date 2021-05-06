import { getDefaultNormalizer } from "@testing-library/dom";
import axios from "axios";
import { Component } from "react";
import imgg from "../img/avatar.png";
import imggg from "../img/inputimage1.png";
import articleimg from "../img/user.png";

// import { selectRecipe } from '../actions/index';
// import { useSelector, useDispatch } from 'react-redux';

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      username: null,
      title: null,
      content: null,
    };

    this.createRecipe = this.createRecipe.bind(this);
    this.recipeCreator = this.recipeCreator.bind(this);
    this.userinfo = this.userinfo.bind(this);
  }

  componentDidMount() {
    this.userinfo();
  }

  recipeCreator = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  userinfo = () => {
    axios
      .get("http://13.59.132.30:4000/users/userinfo", {
        headers: {
          authorization: `Bearer ${this.props.actoken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        this.setState({
          email: res.data.email, // 수정요함
          username: res.data.name, // 데이터 보고 수정요함.
        });
      });
  };

  createRecipe = () => {
    axios
      .post("http://13.59.132.30:4000/recipe/CreateRecipe", {
        user_id: this.state.email,
        title: this.state.title,
        content: this.state.content,
      })
      .then((res) => {});
  };

  render() {
    console.log(this.props.actoken);
    const tempcuruserdata = {
      email: "Kimlucky-for@gmail.com",
      username: "KimLucky",
    };

    const temparticledata = [
      { username: "KimLucky", article: 140 },
      { username: "KimLucky", article: 140 },
      { username: "KimLucky", article: 140 },
      { username: "KimLucky", article: 140 },
      { username: "KimLucky", article: 140 },
    ];

    return (
      <div className="Mypage">
        <div className="MypageLeftArea" />
        <div className="MypageInputArea">
          <div className="MypageInputTopArea" />

          {/* 현재 유저의 email을 보여주는 구간 */}
          <div className="MypageCurEmail">
            <div className="SignupInputImage">
              <img className="SignupImage" src={imgg} alt="" />
            </div>
            <div className="MypageShowText">{this.state.email}</div>
          </div>
          <div className="MypageUpEmptyArea" />

          {/* 현재 유저의 username을 보여주는 구간 */}
          <div className="MypageCurUsername">
            <div className="SignupInputImage">
              <img className="SignupImage" src={imgg} alt="" />
            </div>
            <div className="MypageShowText">{this.state.username}</div>
          </div>
          <div className="SignupInputEmptyArea" />
          <div className="MypageUpEmptyArea" />

          {/* 유저의 이름을 변경하기 위한 인풋박스와 버튼 설정 구간 */}
          <div className="MypageEditUsernameInput">
            <div className="SignupInputImage">
              <img className="SignupImage" src={imgg} alt="" />
            </div>
            <div className="SignupInputText">
              <input
                type="text"
                placeholder="변경하실 이름을 입력해주세요"
                className="EditInputUsername"
              />
            </div>
          </div>
          <div className="MypageUpEmptyArea" />

          <button className="EditUsernameButton">Edit Username</button>
          <div className="MypageUpEmptyArea" />

          {/* 유저의 비밀번호를 변경하기 위한 인풋박스와 버튼 설정 구간 */}
          {/* 첫번째 인풋박스 설정구간 */}
          <div className="MypageEditUsernameInput">
            <div className="SignupInputImage">
              <img className="SignupImage2" src={imggg} alt="" />
            </div>
            <div className="SignupInputText">
              <input
                type="text"
                placeholder="변경하실 비밀번호를 입력해주세요"
                className="EditInputPassword"
              />
            </div>
          </div>
          <div className="MypageUpEmptyArea" />

          {/* 두번째 인풋박스 설정구간 */}
          <div className="MypageEditUsernameInput">
            <div className="SignupInputImage">
              <img className="SignupImage2" src={imggg} alt="" />
            </div>
            <div className="SignupInputText">
              <input
                type="text"
                placeholder="변경하실 비밀번호를 한번 더 입력해주세요"
                className="EditInputPassword2"
              />
            </div>
          </div>
          <div className="MypageUpEmptyArea" />

          {/* 비밀번호 변경 버튼 */}
          <button className="EditPasswordButton">Edit Password</button>
        </div>
        <div className="MypageLeftArea2" />

        {/* 구독여부 확인하는 창 */}
        <div className="MypageArticlesView">
          <div className="MypageArticlestTopArea" />
          <div className="MypageArticlesDivided">
            {/* 내가 구독하는 사람들 리스트창 */}
            <div className="MypageArticles">
              <div className="MypageArticlesHeader">내가 구독하는 사람들</div>
              <div className="MypageArticlesEmptyArea" />
              {/* 하단부터 반복문으로 유저정보에 따라 테이블 생성하여 사진과 이름 구독수 출력 */}
              {temparticledata.map((data, idx) => (
                <div key={idx}>
                  <div className="MypageArticle">
                    <div className="MypageArticleUserImage">
                      <img
                        alt=""
                        src={articleimg}
                        className="ArticleUserImage"
                      />
                    </div>
                    <div className="MypageArticleUserInfo">
                      <span className="ArticleUsername">{data.username}</span>
                      <span className="ArticleCount">{data.article}</span>
                    </div>
                  </div>
                  <div className="MypageArticlesEmptyArea" />
                </div>
              ))}
              {/*반복문 마감 */}
            </div>
            {/* 나를 구독하는 사람들 리스트창 */}
            <div className="MypageArticles">
              <div className="MypageArticlesHeader">나를 구독하는 사람들</div>
              <div className="MypageArticlesEmptyArea" />
              {/* 하단부터 반복문으로 유저정보에 따라 테이블 생성하여 사진과 이름 구독수 출력 */}
              {temparticledata.map((data, idx) => (
                <div key={idx}>
                  <div className="MypageArticle">
                    <div className="MypageArticleUserImage">
                      <img
                        alt=""
                        src={articleimg}
                        className="ArticleUserImage"
                      />
                    </div>
                    <div className="MypageArticleUserInfo">
                      <span className="ArticleUsername">{data.username}</span>
                      <span className="ArticleCount">{data.article}</span>
                    </div>
                  </div>
                  <div className="MypageArticlesEmptyArea" />
                </div>
              ))}
              {/*반복문 마감 */}
            </div>
            {/* 구독부분 끝 */}
          </div>
        </div>
        {/* 레시피쪽라인 */}
        <div className="MypageInputRecipe">
          <div className="MypageInputRecipeUpEmptyArea" />
          {/* 레피시 타이틀 입력창 */}
          <div className="MypageInputRecipeTitle">
            <div className="MypageInputRecipeTitleImage">
              <img alt="" src={imggg} className="MypageInputRecipeImage" />
            </div>
            <div className="MypageInputRecipeTitleArea">
              <input
                type="text"
                placeholder="레시피 이름을 입력해주세요"
                onChange={this.recipeCreator("title")}
                className="MypageInputRecipeTitleBox"
              />
            </div>
          </div>
          <div className="MypageInputRecipeMidEmptyArea" />
          {/* 레시피 내용 입력창 */}
          <div className="MypageInputRecipeContents">
            <div className="MypageInputRecipeContestLeftArea">
              <div className="MypageInputRecipeContestImage">
                <img alt="" src={imggg} className="MypageInputRecipeImage" />
              </div>
            </div>
            <div className="MypageInputRecipeContestRightArea">
              <div className="MypageInputRecipeContestRightAreaInEmpty" />
              <input
                type="textarea"
                className="MypageRecipeContentInput"
                onChange={this.recipeCreator("content")}
                placeholder="조리방법을 입력해주세요"
              />
              <div className="MypageInputRecipeContestRightAreaInEmpty" />
            </div>
          </div>
          <div className="MypageInputRecipeMidEmptyArea" />

          <button
            className="MypageInputRecipeButton"
            onClick={this.createRecipe}
          >
            Create Recipe
          </button>
        </div>
      </div>
    );
  }
}

export default Mypage;
