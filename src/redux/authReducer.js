import { stopSubmit } from "redux-form";
import { generalAPI } from "../api/api";

const SET_AUTH_USER = 'auth/SET_AUTH_USER';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.data,
            };
        }
        default: 
            return state;            
    }
    
}
export const setAuthUser = (userId,login,email, isAuth) =>{
    return {
        type: SET_AUTH_USER,
        data:{userId, email, login, isAuth},

    }
}


export const authUser = () => async (dispatch) => {
    let data = await generalAPI.auth()
    let {id, email, login} = data.data;
    if(data.resultCode === 0 ){
        dispatch(setAuthUser(id, login, email, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await generalAPI.login(email, password, rememberMe)
    if(response.data.resultCode === 0){
        dispatch(authUser())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    await generalAPI.logout()
    dispatch(setAuthUser(null, null, null, false))
}
export default authReducer;