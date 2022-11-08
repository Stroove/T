import React from "react";
import Profile from "./Profile";
import {  getProfile, getUserStatus, updateStatus } from "../../redux/profileReducer";
import { connect } from "react-redux";
import {useLocation,useNavigate,useParams} from 'react-router-dom'
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.router.params.userId;
        if(!userId){
            userId = this.props.authorizedUserId;
        }
        this.props.getUserStatus(userId)
        this.props.getProfile(userId);
    }
    
    

    render(){
        return (
            <div className="profile__container">    
                <Profile profile ={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect (mapStateToProps, { getProfile, getUserStatus, updateStatus}),
    
)(ProfileContainer);