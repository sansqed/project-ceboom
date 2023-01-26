import { postAPICall } from "./axiosMethodCalls";

export const LoginUser = async(user) => {
    try{
        const response = await postAPICall("https://6529-111-125-90-19.ap.ngrok.io/logins/login", {
            username: user.username,
            password: user.password,
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}
