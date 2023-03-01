import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { dbContext } from "../../App";

export const Nav = () => {
    const { products } = useContext(dbContext);
    return (
        <nav className="nav">
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/">Главная</NavLink>
        </nav>
    )
}