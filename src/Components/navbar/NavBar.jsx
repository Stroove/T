import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

let NavBar = () => {
    return (
            <nav className="navBar">
                <div className="navBar__items"> 
                    <ul>
                        <li><Link className="navBar__a" to="/profile">Профиль</Link></li>
                        <li><Link className="navBar__a" to="/dialogs">Сообщения</Link></li>
                        <li><Link className="navBar__a" to="/users">Пользователи</Link></li>   
                        <li><Link className="navBar__a" to="/news">Новости</Link></li>
                        <li><Link className="navBar__a" to="/music">Музыка</Link></li>
                        <li><Link className="navBar__a" to="/settings">Настройки</Link></li>
                    </ul>
                     
                     
                    
                </div>
            </nav>
    );
}

export default NavBar;
