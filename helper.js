import fs from "fs/promises";

export const readFile = async (FILE) => {
    try {
        const data = await fs.readFile(FILE, "utf-8");
        return JSON.parse(data);
    } catch (err) {
        console.log("unable to fetch");
        return [];
    }
};