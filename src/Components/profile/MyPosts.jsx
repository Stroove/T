import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators';
import { FormControl } from '../FormsControls/FormsControls';
import ProfileElement from './ProfileElement';

const maxLengthTen = maxLengthCreator(10)

const MyPosts = (props) =>{
    let posts = props.profilePage.posts.map(p => <ProfileElement text={p.text} key={p.id} id={p.id} likesCount={p.likesCount}/>);
    let addPost = (values) => {
        let text = values.newPostText;
        let postsLenght = props.profilePage.posts.length;
        props.addPost(text, postsLenght);
        values.newPostText = ''
    }
    return(
        <AddPostFormRedux onSubmit={addPost} posts={posts}/>
    )


}
const Textarea = FormControl('textarea')
const addPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className="posts">
                <div className="profile__textarea"><Field validate={[requiredField, maxLengthTen]} component={Textarea} name="newPostText" /></div>
                <button className="profile__addButton">Добавить пост</button>
                <div className="profile__posts posts">{props.posts}</div>    
            </div>
        </form>
    )
} 

const AddPostFormRedux = reduxForm({form:'profileAddPostForm'})(addPostForm)
export default MyPosts