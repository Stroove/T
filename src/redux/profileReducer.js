import { generalAPI } from "../api/api";

const ADD_POST = 'profile/addPost';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';



let initialState = {
    posts:[
        {id:1, text:'Hello', likesCount:10},
        {id:2, text:'Hello everyone', likesCount:10},
        {id:3, text:'Hello everyone', likesCount:10},
        {id:4, text:'Hello everyone', likesCount:5},
    ],
    profile: null,

}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: action.postLength + 1, text: action.addPostText,likesCount: 0,}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state, 
                status: action.status,
            }
        }
        default: 
            return state;            
    }
    
}
export const addPost = (text, postLength) =>{
    return {
        type: ADD_POST,
        addPostText:text,
        postLength: postLength,
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile,
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status,
    }
}

export const getProfile = userId => async (dispatch) => {
        let data = await generalAPI.getProfile(userId)
        dispatch(setUserProfile(data))
}
export const getUserStatus = userId => async (dispatch) => {
    let response = await generalAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = status => async (dispatch) => {
    let response = await generalAPI.updateStatus(status)
    if(response.data.resultCode === 0){
        dispatch(setStatus(status))
    }
}
export default profileReducer;