import { useContext } from "react";
import { dbContext } from "../../App";

export const Admin = () => {
    const { products } = useContext(dbContext);
    return (
        <section className="admin">
            <h2>Admin</h2>
        </section>
    )
}