import { useContext } from "react";
import {DbType } from "../../App";

type PropsType = {
    db: DbType
}

export const Products = ({db}:PropsType) => {
    return (
        <section className="products content">
            <div className="products-title">
                <h2>Товары</h2>
            </div>
            <div className="products-list">
                {db.products.map(product => (
                    <div key={product.id} className="products-item">
                        <img src="" alt="" />
                        <div className="products-item-info">
                            <div className="products-item-info__title">{product.title}</div>
                            <div className="products-item-info__price">{product.price}$</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}