import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'
let Header = (props) => {
    return (
        <div className="header">
            <div className="header__items">
                <div className="header__logo"><img src="img/Logo.png" alt="Mistake" /></div>
                <div className="header__menu">
                    <div className="header__letter">Social Network</div>
                </div>
                {props.isAuth ? <div className="header__login">{props.login} <button onClick={props.logout} className="header__logout">Logout</button></div>  : <Link to={'/login'}>Login</Link>}  
                
            </div>
        </div>        
    );
}

export default Header;