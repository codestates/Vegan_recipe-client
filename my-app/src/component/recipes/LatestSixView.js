import imgg from "../../img/itemimg.png";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {viewRecipe} from '../../actions/index'

function LatestSixView ({value}) {

  let datavalue

    if(value===null){
      datavalue = ""
    }
    else if(typeof value === 'string'){ // material에서 넘어오는 경우
      datavalue = value.toLowerCase()
    }
    else{
      datavalue = value // 검색 recipe에서 넘어오는 경우 
    }
  
    const dispatch = useDispatch();
    const state = useSelector(state => state.dataReducer)
    const {recipeList} = state // 상태 불러오기
    const viewList = []

    recipeList.map(data => {
      if(data.recipeInfo.title.includes(datavalue)||data.userInfo.username.includes(datavalue)){
        return viewList.push(data)
      }
    })


    // const addview = (el) => {
    //   const views = {
    //     el.recipeInfo.tag,
    //     el.recipeInfo.time,
    //     el.recipeInfo.title,
    //   }
    //   dispatch(viewRecipe(view))
    // }
    // const tempdata = [
    //   {
    //     tag: "FRUIT",
    //     time: "5 min",
    //     title: "Simple Juice Recipes to boost your immune system",
    //   },
    //   {
    //     tag: "FRUIT",
    //     time: "5 min",
    //     title: "Simple Juice Recipes to boost your immune system",
    //   },
    //   {
    //     tag: "FRUIT",
    //     time: "5 min",
    //     title: "Simple Juice Recipes to boost your immune system",
    //   },
    //   {
    //     tag: "FRUIT",
    //     time: "5 min",
    //     title: "Simple Juice Recipes to boost your immune system",
    //   },
    //   {
    //     tag: "FRUIT",
    //     time: "5 min",
    //     title: "Simple Juice Recipes to boost your immune system",
    //   },
    //   {
    //     tag: "FRUIT",
    //     time: "5 min",
    //     title: "Simple Juice Recipes to boost your immune system",
    //   },
    // ];
    return (
      
      <div className="LatestSixContainer">
        <div className="LatestSixHeader">
          <span className="LatestSixHeaderTitle">Latest</span>
        </div>
        <div className="LatestSixAllPrint">
          {/* 반복문으로 스테이트에 있는 최근의 게시물 6개를 출력합니다. */}
          {viewList.map((data, idx) => (
            <Link to={{ pathname: '/recipecomment', state:{value: data}}}  style={{ color: 'inherit', textDecoration: 'none' }}>
            <div key={idx} className="LatestOneViewArea">
              <div className="LatestOneView">
                <img alt="" src={imgg} className="LatestOneViewImage" />
                <div className="LatestOneViewEmptyArea" />
                <div className="LatestOneViewTagTime">
                  <span className="LatestOneViewTag" >{data.recipeInfo.tag}</span>
                  <div className="latelyspace" />
                  <div className="latelyLine" />
                  <div className="latelyspace" />
                  <span className="LatestOneViewTime">{data.recipeInfo.time}</span>
                </div>
                <div className="LatestOneViewEmptyArea" />
                <div className="LatestOneViewContestView">
                  <span className="LatestOneViewTitle">{data.recipeInfo.title}</span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

export default LatestSixView;

