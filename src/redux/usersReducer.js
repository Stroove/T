import { generalAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelper";

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let initialState = {
    users:[],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [],
}
const  usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true}, )
        }
        case UNFOLLOW: 
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false}, )
            }
        case SET_USERS:
            return { ...state, users:action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS: 
            return {
                ...state, 
                isFollowingInProgress: action.isFollowingInProgress ?
                [...state.isFollowingInProgress, action.userId] 
                : state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        default: 
            return state;            
    }
    
}
export const followState = (userId) =>{
    return {
        type: FOLLOW,
        userId: userId,
    }
}
export const unFollowState = (userId) =>{
    return {
        type: UNFOLLOW,
        userId: userId,
    }
}
export const setUsers = (users) =>{
    return {
        type: SET_USERS,
        users: users,
    }
}
export const currentPageChange = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}
export const totalCount = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount: totalCount,
    }
}
export const isFetchingToggle = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching: isFetching,
    }
}
export const isFollowingToggle = (isFollowing, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFollowingInProgress: isFollowing,
        userId: userId,
    }
}



export const getUsers = (currentPage, pageSize) => async (dispatch) =>{
    let data = await generalAPI.getUsers(currentPage, pageSize)
    dispatch(isFetchingToggle(false))
    dispatch(setUsers(data.items));
    dispatch(totalCount(data.totalCount))
}
export const onCurrentPageChange = (currentPage) => async (dispatch) => {
        dispatch(isFetchingToggle(true))
        dispatch(currentPageChange(currentPage));
        let data = await generalAPI.getUsers(currentPage)
        dispatch(isFetchingToggle(false));
        dispatch(setUsers(data.items));
}
export const followUnFollowFlow = async (dispatch,apiMethod,actionCreator, id) => {
    dispatch(isFollowingToggle(true, id))
    let data = await apiMethod(id)
    if(data.resultCode === 0 ){
        dispatch(actionCreator(id)) 
    }
    dispatch(isFollowingToggle(false, id))
}
export const follow = (id) => async (dispatch) =>{
        let apiMethod = generalAPI.postFollow.bind(generalAPI);
        let actionCreator = followState;
        followUnFollowFlow(dispatch, apiMethod, actionCreator, id)
}
export const unFollow = (id) => async (dispatch) => {
        let apiMethod = generalAPI.deleteFollow.bind(generalAPI)
        let actionCreator = unFollowState;
        followUnFollowFlow(dispatch, apiMethod, actionCreator, id)
}
export default usersReducer;