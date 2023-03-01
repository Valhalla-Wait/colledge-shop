import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { DbType } from "../../App";

type PropsType = {
    db: DbType
    onCallback: () => void
}

export const Header = ({db, onCallback}:PropsType) => {
    console.log(db.currentUser)
    return (
        <header>
            <div className="logo header-link">
                <NavLink to="/"><h1>Магазин</h1></NavLink></div>
            {
                (db.currentUser && db.currentUser.isAdmin) && <div className="admin-panel header-link">
                    <NavLink to="/admin">
                        Admin Panel
                    </NavLink>
                </div>
            }
            <div className="auth header-link">
                {
                    db.currentUser ?
                        <>
                            <div>
                                {db.currentUser.firstName} {db.currentUser.surname}
                            </div>
                            |
                            <NavLink to="/cart">
                                Корзина
                            </NavLink>
                            |
                            <NavLink onClick={() => onCallback()} to="/">
                                LogOut
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