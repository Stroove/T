import React from "react";
import './dialogsElementChat.css';
import {Route, Routes} from 'react-router-dom';


let DialogsElementChat = (props) => {
    return (
        <Routes>
            <Route path={'/' + props.id} element={<div>{props.text}</div>}/>
        </Routes>
        
    );
}

export default DialogsElementChat;
