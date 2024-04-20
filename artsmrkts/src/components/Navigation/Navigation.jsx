import "./Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {

    return (
        <nav className='header__nav'>
            <NavLink to="/" className="header__logo"></NavLink>
            <div className="header__nav-authbar">
                <NavLink to="/signup" className="header__link_main">Регистрация</NavLink>
                <NavLink to="/signin" className='header__button-main'>Войти</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;