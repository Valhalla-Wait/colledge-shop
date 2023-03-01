import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DbType, SignInType, UserType } from "../../App";
import {useState} from 'react'

type PropsType = {
    onCallback: (data:SignInType) => void
    db: DbType
}

export const SignIn = ({onCallback, db}:PropsType) => {
    const Navigate = useNavigate()

    const [formData, setFormData] = useState<SignInType>({
        email: '',
        password: '',
    })
    console.log(formData)
    return (
        <>
        {db.currentUser && Navigate("/")}
        <section className="signUp">
            <div className="form">
                <input type="text" onChange={(e) => setFormData(prev => ({
                    ...prev, 
                    email: e.target.value
                }))} placeholder="email"/>

                <input type="password" onChange={(e) => setFormData(prev => ({
                    ...prev, 
                    password: e.target.value
                }))} placeholder="Пароль"/>

                <button onClick={() => onCallback(formData)}>Войти</button>
            </div>
        </section>
        </>
    )
}