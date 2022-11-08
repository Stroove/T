import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../FormsControls/FormsControls";
import './dialogs.css';
import DialogsElement from './DialogsElement';
import DialogsElementChat from './DialogsElementChat';
import { maxLengthCreator, requiredField } from '../../utils/validators';

const maxLengthThirty = maxLengthCreator(30)
let Dialogs = (props) => {    
    let dialogsEl = props.dialogsPage.dialogsItem.map(d => <DialogsElement name={d.name} key={d.id} id={d.id} /> )
    let dialogsMessages = props.dialogsPage.messages.map(d => <DialogsElementChat id={d.id} key={d.id} text={d.message}/>)
    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
        values.newMessageBody = '';
    }
    return ( 
        
            <div className="dialogs">
                <div className="dialogs__items">
                    <div className="dialogs__itemNames">
                        <ul>
                            {dialogsEl}
                        </ul>
                    </div>
                    <div className="dialogs__itemChats">
                            <div className="dialogs__messages">
                                    {dialogsMessages}
                            </div>
                    </div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>

    );
}
const Textarea = FormControl('textarea')
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="dialogs__form">
                <div className="dialogs__textarea"><Field validate={[requiredField, maxLengthThirty]} component={Textarea} name='newMessageBody' placeholder="enter your message"/></div>
                <button className="dialogs__addMessage">Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm)
export default Dialogs;