import { postAPICall } from "./axiosMethodCalls";

export const LoginUser = async(user) => {
    try{
        const response = await postAPICall("https://ca07-175-176-65-47.ap.ngrok.io/logins/login", {
            username: user.username,
            password: user.password,
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}
