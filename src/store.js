import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';


let store = {
    _callSubscriber(){
        console.log('State changed');
    },
    _state:{
        dialogsPage:{
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
            newMessageBody:'',
        },
        profilePage:{
            posts:[
                {id:1, text:'Hello', likesCount:10},
                {id:2, text:'Hello everyone', likesCount:10},
                {id:3, text:'Hello everyone', likesCount:10},
                {id:4, text:'Hello everyone', likesCount:5},
            ],
            newPostText: '',
    
        }
    },
    getState(){
        return this._state;
    },

    // goPost(){
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer){
        this._callSubscriber = observer; // наблюдатель
    },


    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);


    }
}


export default store;