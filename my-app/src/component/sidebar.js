import { Component } from "react";
import book from '../img/recipe-book.png';
import harvest from '../img/harvest.png';
import chef from '../img/male-chef.png';


function sidebar () {

    return (
      <div className="sidebar">
        <div className='sideupspace'/>
        <img className="sideImage" src={book}/>
        <div className="sideEmptySpace"/>
        <img className="sideImage" src={harvest}/>
        <div className="sideEmptySpace"/>
        <img className="sideImage" src={chef}/>
      </div>
    );
  }


export default sidebar;
