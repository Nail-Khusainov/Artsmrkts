import React, { useState } from "react";
import "./BurgerMenu.css";
import { NavLink, useLocation } from "react-router-dom";

function BurgerMenu() {
    const location = useLocation();
    const [isBurgerOpened, setIsBurgerOpened] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerOpened(!isBurgerOpened);
    };

    return (
        <section className='burger'>
            <div className="burger__menu">
                {isBurgerOpened ? (
                    <button
                        className="burger__close-button"
                        onClick={toggleBurgerMenu}
                    />
                ) : (
                    <button
                        className={`burger__button ${isBurgerOpened ? 'burger__button_opened' : ''}`}
                        onClick={toggleBurgerMenu}
                    />
                )}
                {isBurgerOpened && (
                    <>
                        <ul className="burger__menu-list">
                            <li>
                                <NavLink
                                    to='/aboutus'
                                    onClick={toggleBurgerMenu}
                                    className={`burger__menu-item ${location.pathname === '/' ? 'burger__menu-item_underline' : ''}`}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/trading'
                                    onClick={toggleBurgerMenu}
                                    className={`burger__menu-item ${location.pathname === '/movies' ? 'burger__menu-item_underline' : ''}`}
                                >
                                    Forex Trading
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/tools'
                                    onClick={toggleBurgerMenu}
                                    className={`burger__menu-item ${location.pathname === '/saved-movies' ? 'burger__menu-item_underline' : ''}`}
                                >
                                    Tools
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/partner'
                                    onClick={toggleBurgerMenu}
                                    className={`burger__menu-item ${location.pathname === '/saved-movies' ? 'burger__menu-item_underline' : ''}`}
                                >
                                    Partner With Us
                                </NavLink>
                            </li>
                            
                            <div className="burger__account-bar">
                            <li>
                                <NavLink
                                    to="/profile"
                                    onClick={toggleBurgerMenu}
                                    className='burger__button-account'
                                >
                                    Register
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/profile"
                                    onClick={toggleBurgerMenu}
                                    className='burger__button-account'
                                >
                                    Demo
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/profile"
                                    onClick={toggleBurgerMenu}
                                    className='burger__button-account'
                                >
                                    Login
                                </NavLink>
                            </li>
                            </div>
                            <button className="burger__lang-btn"/>
                        </ul>
                        <div className="burger-overlay" onClick={toggleBurgerMenu} />
                    </>
                )}
            </div>
        </section>
    );
}

export default BurgerMenu;
