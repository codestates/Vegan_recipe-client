import { Component } from "react";
import mainimage from "../../img/recipemainimage.png";
import heartimage from "../../img/heart.png";
import userimg from "../../img/user.png";
import bookmark from "../../img/bookmark.png";
import { selectRecipe } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';

function RecipeComment () {

    //   axios로 데이터를 받은 다음 
    //   const dispatch = useDispatch();
    //   const handleClick = (item) => {
    //   dispatch(selectRecipe(item)) // reducer로 상태 변경 
    //   랜덤 5개 선택해서 페이지에 노출 
    //   const state = useSelector(state => state.dataReducer)
    //   const {recipeList}=state


    const tempdata = {
      tag: "FRUIT",
      time: "5 min",
      title: "Simple Juice Recipes to boost your immune system",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      username: "Andrea Wise",
      comments: [
        {
          username: "KimLucky",
          time: "5min",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          username: "KimLucky",
          time: "5min",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          username: "KimLucky",
          time: "5min",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          username: "KimLucky",
          time: "5min",
          comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
    return (
      <div className="RecipeCommentContainer">
        {/* 레피시 내용 출력 */}
        <div className="RecipeCommentContent">
          <img className="RecipeMainImage" src={mainimage} alt="" />{" "}
          {/* 상단 이미지 출력 */}
          <div className="RecipeMainUpEmptyArea" />
          <div className="RecipeMainTagArea">
            {" "}
            {/* 태그와 좋아요 버튼 출력하는 구간 */}
            <div className="RecipeTagEmptyArea" />
            <div className="RecipeTagContentArea">
              <span className="RecipeMainTag">{tempdata.tag}</span>
              <img alt="" className="RecipeHeartImage" src={heartimage} />
            </div>
            <div className="RecipeTagEmptyArea" />
          </div>
          <div className="RecipeMainUpEmptyArea" />
          {/* 레시피의 타이틀과 내용을 출력하는 창 */}
          <div className="RecipeTitleContentArea">
            <div className="RecipeTitleContentEmptyArea" />
            <div className="RecipeTitleContentShowArea">
              <div className="RecipeTitleArea">
                <span className="RecipeTitle">{tempdata.title}</span>
              </div>
              <div className="RecipeContentArea">
                <span className="RecipeContent">{tempdata.content}</span>
              </div>
            </div>
            <div className="RecipeTitleContentEmptyArea" />
          </div>
          {/* 하단 작성자의 정보 표시 && 구독 이미지 */}
          <div className="RecipeUserInfo">
            <div className="RecipeUserInfoEmptyArea" />
            <div className="RecipeUserInfoArea">
              <div className="RecipeUserArea">
                {" "}
                {/* 유저 사진과 이름 */}
                <img alt="" className="RecipeUserImage" src={userimg} />
                <span className="RecipeCreateUsername">
                  {tempdata.username}
                </span>
              </div>
              <div className="RecipeUserHeartArea">
                {" "}
                {/* 시간과 구독버튼 */}
                <span className="RecipeCreateTime">{tempdata.time}</span>
                <img alt="" className="RecipeBookmartImage" src={bookmark} />
              </div>
            </div>
            <div className="RecipeUserInfoEmptyArea" />
          </div>
        </div>
        {/* 레피시 내용 출력끝 */}
        <div className="RecipeCommentEmptyArea" /> {/* 공백 */}
        {/* 코멘트 출력 */}
        <div className="RecipeCommentContent">
          {/* 코멘트 입력창 */}
          <div className="RecipeCommentInputArea">
            <div className="RecipeCommentArea">
              <input
                type="text"
                className="CommentInputArea"
                placeholder="댓글 내용을 작성해주세요"
              />
            </div>
            <div className="RecipeCommentButtonArea">
              <button className="InputCommentButton">작성</button>
            </div>
          </div>
          {/* 해당 게시물의 모든 코멘트 출력 */}
          <div className="CurRecipeCommentArea">
            {tempdata.comments.map((data, idx) => (
              <div key={idx}>
                <div className="CurRecipeCommentUpEmptyArea" />
                <div className="CurRecipeCommentDownArea">
                  <div className="CurRecipeCommentSideEmptyArea" />
                  <div className="CurRecipeCommentPrintArea">
                    <div className="CurRecipeComment">
                      <span className="CurRecipeCommentText">
                        {data.comment}
                      </span>{" "}
                      {/* 코멘트 출력창 */}
                    </div>
                    <div className="CurRecipeCommentUserArea">
                      {" "}
                      {/* 현재 코멘트 작성자 */}
                      <span className="CurRecipeCommentUsername">
                        {data.username}
                      </span>
                      <div className="latelyspace" />
                      <div className="latelyLine" />
                      <div className="latelyspace" />
                      <span className="CurRecipeCommentTime">{data.time}</span>
                    </div>
                  </div>
                  <div className="CurRecipeCommentSideEmptyArea" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 코멘트 출력끝 */}
      </div>
    );
  }

export default RecipeComment;
