import React from "react";
import s from './FormsControl.module.css'

export const FormControl = (Element)=> ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className="textarea__container">
            <Element className={ '' + (hasError ? s.error : '' )} {...input} {...props} />
            <span className={'' + (hasError ? s.hasError: s.noError)}>{meta.error}</span>
        </div>
    )
}