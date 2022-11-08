// import store from './redux/reduxStore';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogsItem: [
        {name:'David', age:14, id:'1'},
        {name:'Arsen', age:14, id:'2'},
        {name:'Mom', age:14, id:'3'},
        {name:'Bob', age:14, id:'4'},
        {name:'Ben', age:14, id:'5'},
        {name:'Dan', age:14, id:'6'},
    ],
    messages:[
        {id:1, message:'Hi'},
        {id:2, message:'Yeah'},
        {id:3, message:'Nice'},
        {id:4, message:'Join to my team'},
        {id:5, message:'Hello Bro'},
        {id:6, message:"Im'looking for a new keeper for my team"},
    ],
}

const dialogsReducer = (state = initialState, action) =>{
    switch (action.type){
    case SEND_MESSAGE:{
            let body = action.sendMessage;
            return {
                ...state,
                messages: [...state.messages, { id: '', message:body, } ],
            };        
        }
        default:
            return state;
        }
    }
    export const sendMessage = (body) =>{
    return {
        type: SEND_MESSAGE,
        sendMessage:body,
    }
}
export default dialogsReducer;