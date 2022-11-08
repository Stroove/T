import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const ProfileStatus = (props) => {
    let [editMode, editModeChange] = useState(false)
    let [status, statusChange] = useState(props.status)
    useEffect(() => {
        statusChange(props.status)
    }, [props.status])

    const deActivateEditMode = () => {
        editModeChange(false)
        props.updateStatus(status)
    }
    const activateEditMode = () =>{
        editModeChange(true)
    }
    
    const onChangeStatus = (e) => {
        statusChange(e.currentTarget.value)
    }
    
    
        return(
        <div className="profile__status" >
                {editMode ?
                <div data-testid='deactive' className="profileStatusTextareaContainer">
                    <span>Ваш статус: </span> 
                    <input onChange={onChangeStatus} onBlur={deActivateEditMode} autoFocus={true} value={status} type='text' className="profile__statusTextarea"/>
                </div> :  
                <div data-testid="active" onDoubleClick={activateEditMode} className="profile__statusText"> 
                    <span>Ваш статус: </span> 
                    <div>{status}</div>
                </div>  
                }
        </div>
        )
}
export default ProfileStatus;