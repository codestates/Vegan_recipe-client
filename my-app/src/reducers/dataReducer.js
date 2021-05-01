import { UPDATE_RECIPE, VIEW_RECIPE, MAIN_RECIPE,LOGIN, LOGOUT } from "../actions/index";
import { initialState } from "./initialState";

const dataReducer = (state = initialState, action) => {

switch (action.type) {
    case UPDATE_RECIPE: // 선택한 레시피 업데이트
        return Object.assign({}, state, {
        recipeList : [action.payload]
        })
    case VIEW_RECIPE: // 최근 본 레시피 6가지 배열 추가 조건문 추가
        return Object.assign({}, state, {
        viewSixRecipe : [...state.viewSixRecipe.slice(0, index), action.payload,
            ...state.viewSixRecipe.slice(index+1)]
        })
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