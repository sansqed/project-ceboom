import { postAPICall } from "./axiosMethodCalls";

export const AddNewUser = async(newUser) => {
    try{
        const response = await postAPICall("https://5ab9-111-125-90-19.ap.ngrok.io/users/add", {
            username: newUser.username,

            password: newUser.password,
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}
