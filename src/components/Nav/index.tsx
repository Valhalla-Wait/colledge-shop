import { useContext } from "react";
import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="nav">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/">Главная</NavLink>
        </nav>
    )
}