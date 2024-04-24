import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {

    return (
        <div className="header">
            <nav className='header__nav'>
                <NavLink to="/" className="header__logo"></NavLink>
                <BurgerMenu/>
                <div className="header__nav-links">
                    <NavLink to="/aboutus" className="header__nav-link">
                        О нас
                    </NavLink>
                    <NavLink to="/projects" className="header__nav-link">
                        Проекты
                    </NavLink>
                    <NavLink to="/news" className="header__nav-link">
                        Новости
                    </NavLink>
                    <NavLink to="/faq" className="header__nav-link">
                        FAQ
                    </NavLink>
                    <NavLink to="/contacts" className="header__nav-link">
                        Контакты
                    </NavLink>
                </div>
            </nav>

            <div className="header__authbar">
                <NavLink to="/contacts" className='header__btn'>Связаться с нами</NavLink>
            </div>
        </div>
    );
}

export default Header;