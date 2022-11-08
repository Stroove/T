import React from "react";
import './usersElement.css';
import avatar from '../../assets/avatar2.png';
import { Link } from "react-router-dom";


const UsersElement = (props) => {
    return (
        <div className="users__user">
            <div className="users__left">
                <Link to={'/profile/' + props.id}>
                    <div className="users__avatar">
                        <img className="users__avatarImg" src={props.photos.small != null ? props.photos.small : avatar} alt="No url" />
                    </div>
                </Link>
                <div className="users__button">{props.followed ?
                    <button className="users__followed" disabled={props.isFollowingInProgress.some(id => id === props.id )} onClick={()=>{props.unFollow(props.id)} }>Unfollow</button>
                    : <button className="users__followed" disabled={props.isFollowingInProgress.some(id => id === props.id )} onClick={ ()=>{props.follow(props.id)} }>Follow</button>}</div>
            </div> 
            <div className="users__right">
                <div className="users__top">
                    <div className="users__name">{props.name}</div>
                    <div className="users__country">{/* {props.country + ','} */}</div>
                </div>
                <div className="users__bottom">
                    <div className="users__city">{/* {props.city} */}</div>
                    <div className="users__status">{props.status}</div>
                </div>
            </div>
        </div>
    )
}

export default UsersElement;