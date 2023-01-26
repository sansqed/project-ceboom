import { postAPICall, URL } from "./axiosMethodCalls";

export const LoginUser = async(user) => {
    try{
        const response = await postAPICall(URL+"logins/login", {
            username: user.username,
            password: user.password,
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}
