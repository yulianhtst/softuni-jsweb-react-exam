import { BASE_URL } from "../constants/index.js";

export const register = async (data) => {
    const newUser = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        body: JSON.stringify(data),
    });

    return newUser;
};
export const login = async (data) => {
    const loggedUser = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        body: JSON.stringify(data),
    });

    return loggedUser;
};
