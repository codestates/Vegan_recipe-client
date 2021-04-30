import { UPDATE_RECIPE, SELECT_RECIPE, LOGIN, LOGOUT } from "../actions/index";
import { initialState } from "./initialState";

const dataReducer = (state = initialState, action) => {

switch (action.type) {
    case UPDATE_RECIPE:
        return Object.assign({}, state, {
        recipeList : [action.payload]
        })
    case SELECT_RECIPE: // 선택한 레시피 업데이트
        return Object.assign({}, state, {
        selectedRecipe : action.payload
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