import dotenv from "dotenv";
import path from "path";

export const config = () => {
    const p = path.join(path.dirname(""), ".env")
    dotenv.config(p);
};