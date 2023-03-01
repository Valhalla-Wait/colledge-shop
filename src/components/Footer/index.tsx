import { useContext } from "react";
import { dbContext } from "../../App";

export const Footer = () => {
    const { products } = useContext(dbContext);
    return (
        <section className="Footer">
            <h2>Footer</h2>
        </section>
    )
}