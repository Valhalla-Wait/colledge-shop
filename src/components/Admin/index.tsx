import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DbType, ProductType } from "../../App";
import { useState } from "react"

type PropsType = {
    onCallback: (data: ProductType) => void
    db: DbType
}

export const Admin = ({ onCallback, db }: PropsType) => {
    const Navigate = useNavigate()

    const [formData, setFormData] = useState<ProductType>({
        id: db.products.length,
        title: '',
        description: '',
        price: 0,
    })
    console.log(formData)
    return (
        <section className="admin">
            <div className="form">
                <input type="text" onChange={(e) => setFormData(prev => ({
                    ...prev,
                    title: e.target.value
                }))} placeholder="title" />

                <input type="text" onChange={(e) => setFormData(prev => ({
                    ...prev,
                    description: e.target.value
                }))} placeholder="description" />

                <input type="text" onChange={(e) => setFormData(prev => ({
                    ...prev,
                    price: Number(e.target.value)
                }))} placeholder="price" />


                <button onClick={() => {
                    debugger
                    return onCallback(formData)}}>Добавить товар</button>
            </div>
        </section>
    )
}