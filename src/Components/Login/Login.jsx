import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators";
import { FormControl } from "../FormsControls/FormsControls";
import { login } from "../../redux/authReducer";
import { Navigate } from "react-router";
import s from '../FormsControls/FormsControl.module.css';

const maxLegth30 = maxLengthCreator(30)
const maxLegth20 = maxLengthCreator(20)
const LoginForm = (props) => {
    return (
        <div className="login__form">
            <form onSubmit={props.handleSubmit} action="">
                <Field validate={[requiredField, maxLegth30]} type="text" name={'email'} placeholder="email" component={Input}/>
                <Field validate={[requiredField, maxLegth20]} type="text" name={'password'} placeholder="password" component={Input} />
                <Field validate={[requiredField, maxLegth20]} type="checkbox" name={'rememberMe'} component={Input}  /> remember me
                {props.error && <div className={s.error}>{props.error}</div>}
                <button>Login</button>
            </form>
            
        </div>    
    )
}
const Input = FormControl('input')
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login = (props) => {
    const onSubmit = (allFormData) => {
        props.login(allFormData.email, allFormData.password, allFormData.rememberMe)
    }
    if(props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {login})(Login);