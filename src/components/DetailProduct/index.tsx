import { useContext } from "react";
import { dbContext } from "../../App";

export const DetailProduct = () => {
    const { products } = useContext(dbContext);
    return (
        <section className="DetailProduct">
            <h2>DetailProduct</h2>
        </section>
    )
}