import React from "react";
import {Link} from 'react-router-dom';
import './dialogsElement.css';

let DialogsElement = (props) => {
    return(
            <li><Link to={'/dialogs/' + props.id} className="dialogs__name">{props.name}</Link></li>
    );

}

export default DialogsElement;