import './dialogs.css';
import Dialogs from "./Dialogs";
import {sendMessage} from '../../redux/dialogsReducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import React from 'react'
import { compose } from 'redux';

// let DialogsContainer = (props) => {    

    
    
//     return ( 
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let dialogsEl = store.getState().dialogsPage.dialogsItem.map(d => <DialogsElement name={d.name} id={d.id} /> )
//                     // let dialogsMessages = messages.map(m => <Route path={'/'+ m.id} element={<DialogsElementChat  text={m.message}/>}/>)
//                     let dialogsMessages = store.getState().dialogsPage.messages.map(d => <DialogsElementChat id={d.id} text={d.message}/>)
//                     let newMessageBody = store.getState().dialogsPage.newMessageBody;
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessageActionCreator(body)) 
//                     }
//                     let onSendMessageClick = (body) => {
//                         store.dispatch(sendMessageActionCreator(body));
//                     }
//                     return (
//                         <Dialogs dialogsEl={dialogsEl} dialogsMessages={dialogsMessages} newMessageBody={newMessageBody}
//                         onNewMessageChange={onNewMessageChange} onSendMessageClick={onSendMessageClick} />
//                     )
//                 }
                
//             }
            
//         </StoreContext.Consumer>
//     );
// }/


let DialogsContainerAPI = (props) => {
    return (
        <Dialogs  {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default compose(
    withAuthRedirect, 
    connect (mapStateToProps, {sendMessage}),
)(DialogsContainerAPI);