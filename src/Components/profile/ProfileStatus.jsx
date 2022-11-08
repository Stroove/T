// import React from "react";
// // NOT USE!!!!!!!!!!!!!!!

// class ProfileStatus extends React.Component{
//     state = {
//         editMode: false,
//         status: this.props.status,
//     }

//     componentDidUpdate (prevProps, prevState){
        
//         if(prevProps.status !== this.props.status){
//             this.setState({
//                 status: this.props.status,
//             })
//         }
//     }
    
//     activeEditMode = () =>{
//         this.setState({
//             editMode: true,
//         })
//     }
//     deActiveEditMode = () =>{
//         this.setState({
//             editMode: false,
//         })
//         this.props.updateStatus(this.state.status)
//     }
//     onStatusChange = (event) => {
//         this.setState({
//             status: event.currentTarget.value,
//         })
//     }
//     render () {
//         return(
//         <div className="profile__status">
//                 {this.state.editMode ?
//                 <div className="profileStatusTextareaContainer">
//                     <span>Ваш статус:</span>
//                     <input onChange={this.onStatusChange} onBlur={this.deActiveEditMode} autoFocus={true} value={this.state.status} type='text' className="profile__statusTextarea"/>
//                 </div> :  
//                 <div onDoubleClick={this.activeEditMode} className="profile__statusText"> 
//                     <span>Ваш статус: </span> 
//                     <span>{this.props.status}</span>
//                 </div>  
//                 }
//         </div>
//         )
//     }
// }

// export default ProfileStatus;