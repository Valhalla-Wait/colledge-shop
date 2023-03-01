import { useContext } from "react";
import { dbContext } from "../../App";

export const SignIn = () => {
    const { products } = useContext(dbContext);
    return (
        <section className="SignIn">
            <h2>SignIn</h2>
        </section>
    )
}