import React from "react";
import './profileElement.css';

let ProfileElement = (props) => {
    return (
        <div className="post__item">
            <img src="img/instagram.png" alt="" className="post__img" />
            <div className="post__text">{props.text}</div>
            <div className="post__likes">{props.likesCount}</div>
            
        </div>
    );
}

export default ProfileElement;