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
                        About Us
                    </NavLink>
                    <NavLink to="/trading" className="header__nav-link">
                        Forex Trading
                    </NavLink>
                    <NavLink to="/tools" className="header__nav-link">
                        Tools
                    </NavLink>
                    <NavLink to="/partner" className="header__nav-link">
                        Partner With Us
                    </NavLink>
                </div>
            </nav>

            <div className="header__authbar">
                <button className="header__lang-btn"/>
                <NavLink to="/signup" className="header__btn header__btn-reg">Register</NavLink>
                <NavLink to="/demo" className='header__btn header__btn-demo'>Demo Account</NavLink>
                <NavLink to="/singin" className='header__auth-link'>Login</NavLink>
            </div>
        </div>
    );
}

export default Header;