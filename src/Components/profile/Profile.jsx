import React from 'react';
import './profile.css';
import MyPostsContainer from './MyPostsContainer';
import ProfileAbout from './ProfileAbout';



let Profile = (props) => {
    
    return(
        <div className="profile">
            <ProfileAbout profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;