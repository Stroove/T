import { createSelector } from "reselect"

export const getUserState = (state) => {
    return state.usersPage.users
}
export const getUserSelector = createSelector(getUserState, (users)=> {
    return users.filter(u => true)
})
export const getPageSizeState = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCountState = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageState = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetchingState = (state) => {
    return state.usersPage.isFetching
}
export const getIsFollowingInProgressState = (state) => {
    return state.usersPage.isFollowingInProgress
}