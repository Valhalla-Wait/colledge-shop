import { current } from "@reduxjs/toolkit";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { DbType, UserType } from "../../App";

type PropsType = {
    onCallback: (data:UserType) => void
    db: DbType
}

export const SignUp = ({onCallback, db}:PropsType) => {

    const Navigate = useNavigate()

    const [formData, setFormData] = useState<UserType>({
        id: db.users.length,
        firstName: '',
        surname: '',
        email: '',
        password: '',
        isAdmin: false,
    })
    console.log(formData)
    return (
        <>
        {db.currentUser && Navigate("/")}
        <section className="signUp">
            <div className="form">
                <input type="text" onChange={(e) => setFormData(prev => {
                    return { 
                        ...prev, 
                        firstName: e.target.value
                    }
                })} placeholder="Имя"/>

                <input type="text" onChange={(e) => setFormData(prev => ({
                    ...prev, 
                    surname: e.target.value
                }))} placeholder="Фамилия"/>

                <input type="text" onChange={(e) => setFormData(prev => ({
                    ...prev, 
                    email: e.target.value
                }))} placeholder="email"/>

                <input type="password" onChange={(e) => setFormData(prev => ({
                    ...prev, 
                    password: e.target.value
                }))} placeholder="Пароль"/>

                <button onClick={() => onCallback(formData)}>Зарегистрироваться</button>
            </div>
        </section>
        </>
    )
}