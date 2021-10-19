import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <nav className={s.nav}>
            Menu
            <div className={s.item}>
                <NavLink to ="/mainPage" activeClassName={s.activeLink}>Main page</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = "/aboutHikes" activeClassName={s.activeLink}>About hikes</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = "/suggestedHikes" activeClassName={s.activeLink}>Suggested hikes</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = "/reviews" activeClassName={s.activeLink}>Reviews</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = "/aboutUs" activeClassName={s.activeLink}>About us</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = "/contacts" activeClassName={s.activeLink}>Contacts</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.button} to = "/test" activeClassName={s.activeLink}>Find an individual hike</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;