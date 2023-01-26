import { postAPICall, URL } from "./axiosMethodCalls";

export const AddNewUser = async(newUser) => {
    try{
        const response = await postAPICall(URL+"users/add", {
            username: newUser.username,

            password: newUser.password,
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}
