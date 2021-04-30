export const UPDATE_RECIPE = 'UPDATE_RECIPE'
export const SELECT_RECIPE = 'SELECT_RECIPE'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


export const updateRecipe = (name) =>{
    return {
        type : 'UPDATE_RECIPE',
        payload: name   
    }
}


export const selectRecipe = (name) =>{
    return {
        type : 'SELECT_RECIPE',
        payload: name   
    }
}

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