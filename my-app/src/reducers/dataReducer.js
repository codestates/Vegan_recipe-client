import { UPDATE_RECIPE, VIEW_RECIPE, MAIN_RECIPE,LOGIN, LOGOUT } from "../actions/index";
import { initialState } from "./initialState";

const dataReducer = (state = initialState, action) => {

switch (action.type) {
    case UPDATE_RECIPE: // 서버로 부터 모든 레시피 데이터 받기
        return Object.assign({}, state, {
        recipeList : [...action.payload] // 레시피 목록이 배열로 온다는 가정
        })
    case VIEW_RECIPE: // 최근 본 레시피 6가지 배열 추가 조건문 추가
        if(state.viewSixRecipe.length < 6){ // 길이가 6미만일경우 배열에 추가
            return Object.assign({}, state, {
                viewSixRecipe : [ ...state.viewSixRecipe , action.payload ]
            })
        }
        else{ // 6일경우 맨 앞 자르고 추가 
            return Object.assign({}, state, {
                viewSixRecipe : [...state.viewSixRecipe.slice(1, 5)
                    , action.payload]
                })
        }
        
    case MAIN_RECIPE: // 선택한 하나의 main 레시피 업데이트
        return Object.assign({}, state, {
        mainRecipe : action.payload
        })       
    case LOGIN: 
        return Object.assign({}, state, {
        login : action.payload
        })
    case LOGOUT: 
        return Object.assign({}, state, {
        login : action.payload
        })        
    default:
    return state;
}
}

export default dataReducer;