import { readFile } from "./helper.js";

const FILE = "./user.json";

const login = async (userdetails, FILE) => {
    const users = await readFile(FILE);

    if (users.length === 0) {
        return "user is not existing";
    }

    const userFound = users.find((u) => u.email === userdetails.email);

    if (!userFound) {
        return { message: "user not registered" };
    }

    if (userFound.password !== userdetails.password) {
        return { message: "incorrect password" };
    }

    return { message: "login successful", user: userFound };
};

login({ email: "ckunisch0@state.gov", password: "john123" }, FILE)
    .then((res) => console.log(res));
    
