import { Component } from "react";
import imgg from "../img/nouser.png";


function topbar () {

    return (
      <div className="topbar">
        <div className="logo"></div>
        <div className='topuserwrap'>
          <div className="topuser">
            <p className="topUserName"> Log In </p>
            <img className="loginimage" src={imgg} />
          </div>
          <div className='topspace'></div>
        </div>
      </div>
    );
  }


export default topbar;
