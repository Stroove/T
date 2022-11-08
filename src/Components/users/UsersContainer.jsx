import React from "react";
import { connect } from "react-redux";
import { follow, unFollow,totalCount, getUsers, onCurrentPageChange} from "../../redux/usersReducer";
import Users from './Users';
import Preloader from "../../preloader/Preloader";
import { compose } from "redux";
import { getCurrentPageState, getIsFetchingState, getIsFollowingInProgressState, getPageSizeState, getTotalUsersCountState, getUserSelector, } from "../../redux/usersSelectors";




class UsersContainerAPI extends React.Component {
    componentDidMount(){
        if (this.props.users.length === 0) {
            this.props.getUsers(this.props.currentPage, this.props.pageSize)
            
        }
    }
    onCurrentPageChange = (currentPage) => {
        this.props.onCurrentPageChange(currentPage)
    }

            
    render = () => {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                isFollowingInProgress={this.props.isFollowingInProgress}
                onCurrentPageChange={this.onCurrentPageChange}
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                isFollowingToggle = {this.props.isFollowingToggle}
            /> 
        </>
    }
}

let mapStateToProps = (state) =>{
    return {
        users: getUserSelector(state),
        pageSize: getPageSizeState(state),
        totalUsersCount: getTotalUsersCountState(state),
        currentPage: getCurrentPageState(state),
        isFetching: getIsFetchingState(state),
        isFollowingInProgress: getIsFollowingInProgressState(state),
    }
}

export default compose(
    connect (mapStateToProps, 
        {follow, unFollow, totalCount, getUsers,
        onCurrentPageChange,}),
    
)(UsersContainerAPI);