import imgg from "../../img/itemimg.png";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {viewRecipe} from '../../actions/index'
import axios from "axios";

function LatestSixView (props) {

  // let {list} = props.list
 

  // if(props.list===undefined){
  //   list = [{
  //     title : '없음',
  //     createdAt: '2021.5.6'
  //   }]
  // }


    return (
      
      <div className="LatestSixContainer">
        <div className="LatestSixHeader">
          <span className="LatestSixHeaderTitle">Latest</span>
        </div>
        <div className="LatestSixAllPrint">
          {/* 반복문으로 스테이트에 있는 최근의 게시물 6개를 출력합니다. */}
          {props.list.map((data, idx) => (
            // <Link to={{ pathname: 'recipe/recipecomment', state:{value: data}}} onClick={handelselectedRecipe} style={{ color: 'inherit', textDecoration: 'none' }}>
            <div onClick={()=>props.function(data.title)}>
            <div key={idx} className="LatestOneViewArea" >
              <div className="LatestOneView">
                <img alt="" src={imgg} className="LatestOneViewImage" />
                <div className="LatestOneViewEmptyArea" />
                <div className="LatestOneViewTagTime">
                  <span className="LatestOneViewTag" >재료</span>
                  <div className="latelyspace" />
                  <div className="latelyLine" />
                  <div className="latelyspace" />
                  <time datetime="YYYY-MM-DD"className="LatestOneViewTime" >{data.createdAt}</time>
                </div>
                <div className="LatestOneViewEmptyArea" />
                <div className="LatestOneViewContestView">
                  <span className="LatestOneViewTitle">{data.title}</span>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default LatestSixView;