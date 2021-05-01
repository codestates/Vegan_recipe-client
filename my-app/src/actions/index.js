export const UPDATE_RECIPE = 'UPDATE_RECIPE'
export const VIEW_RECIPE = 'VIEW_RECIPE'
export const MAIN_RECIPE = 'MAIN_RECIPE'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


export const updateRecipeList = (data) =>{
    return {
        type : 'UPDATE_RECIPE',
        payload: data  
    }
} // 전체 리스트 업데이트


export const viewRecipe = (data) =>{
    return {
        type : 'VIEW_RECIPE',
        payload: data   
    }
} // 최근 본 레시피 


export const mainRecipe = (data)=>{
    return {
        type : 'MAIN_RECIPE',
        payloed: data
    }
} // 현재 선택한 레시피

export const login = () =>{
    return {
        type : 'LOGIN',
        payload: true   
    }
}

export const logout = () =>{
    return {
        type : 'LOGOUT',
        payload: false   
    }
}