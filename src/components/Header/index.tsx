import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { dbContext } from "../../App";

export const Header = () => {
    const { currentUser } = useContext(dbContext);
    return (
        <header>
            <div className="logo header-link">
                <NavLink to="/"><h1>Магазин</h1></NavLink></div>
            {
                (currentUser && currentUser.isAdmin) && <div className="admin-panel header-link">
                    <NavLink to="/admin">
                        Admin Panel
                    </NavLink>
                </div>
            }
            <div className="auth header-link">
                {
                    currentUser ?
                        <>
                            <div>
                                {currentUser.firstName} {currentUser.surname}
                            </div>
                            |
                            <NavLink to="/cart">
                                Корзина
                            </NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/signUp">
                                SignUp
                            </NavLink>
                            |
                            <NavLink to="/signIn">
                                SignIn
                            </NavLink>
                        </>
                }

            </div>
        </header>
    )
}