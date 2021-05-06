import { Component } from "react";
import imgg from "../../img/itemimg.png";
import imggg from "../../img/user.png";



function MainViewRecipe () {

    const tempdata = [
      {
        tag: "FRUIT",
        time: "5 days ago",
        name: "Simple Juice Recipes to boost your immune system",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        username: "kimlucky",
      },
    ];
    return (
      <div>
        {tempdata.map((data) => (
          <div className="MainViewRecipe">
            <img className="MainViewRecipeImage" src={imgg} alt="" />
            <div className="MainViewRecipeContentArea">
              <div className="MainViewRecipeSpace" />
              <div className="MainViewRecipeMidArea">
                <div className="MainViewRecipeUpSpace" />
                <div className="MainViewTagTimeArea">
                  <span className="latelyTag">{data.tag}</span>
                  <div className="latelyspace" />
                  <div className="latelyLine" />
                  <div className="latelyspace" />
                  <span className="latelyTime">{data.time}</span>
                </div>
                <div className="MainViewRecipeTitle">{data.name}</div>
                <div className="MainViewRecipeContent">{data.content}</div>
                <div className="MainViewRecipeLine"/>
                <div className="MainViewRecipeUpSpace" />
                <dib className="MainViewRecipeUserArea">
                  <img className="MainViewRecipeUserImage" src={imggg} alt=''/>
                  <div className="latelyspace" />
                  <span className="MainViewRecipeUserName">{data.username}</span>
                </dib>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }


export default MainViewRecipe;
