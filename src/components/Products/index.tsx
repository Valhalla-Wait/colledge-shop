import { useContext } from "react";
import { dbContext } from "../../App";

export const Products = () => {
    const { products } = useContext(dbContext);
    return (
        <section className="products content">
            <div className="products-title">
                <h2>Товары</h2>
            </div>
            <div className="products-list">
                {products.map(product => (
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