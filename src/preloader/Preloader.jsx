import React from "react";
import preloader from './preloaderImg.svg';
import s from './preloader.module.css'

const Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img className={s.preloader__imgU} src={preloader} alt="" />
        </div>
    )

}

export default Preloader;