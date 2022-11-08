import { authUser } from "./authReducer";

const INITIALIZED_SUCCESS = 'SET_AUTH_USER';

let initialState = {
    initialized: false,
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true,
            };
        }
        default: 
            return state;            
    }
    
}
export const initializedSuccess = () =>{
    return {
        type: INITIALIZED_SUCCESS,
    }
}


export const initializeApp = () => async (dispatch) => {
    let promise = dispatch(authUser());
    await Promise.all([promise])
    dispatch(initializedSuccess() )
}

export default appReducer;