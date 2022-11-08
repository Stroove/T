import React from "react";
import Preloader from '../../preloader/Preloader'
import ProfileStatusFunctional from "./ProfileStatusFunctional";


const ProfileAbout = (props) => {

    if (!props.profile){
        return <Preloader />
    }
    
    return (
        <div className="profile__about">
            <div className="profile__img">
                <img src={props.profile.photos.small} alt="" />
            </div>
            <div className="profile__statusOut">
                <ProfileStatusFunctional status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileAbout;