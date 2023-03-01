import { useContext } from "react";
import { dbContext } from "../../App";

export const SignUp = () => {
    const { products } = useContext(dbContext);
    return (
        <section className="signUp">
            <h2>SignUp</h2>
        </section>
    )
}