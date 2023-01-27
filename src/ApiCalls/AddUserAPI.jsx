import { postAPICall, URL } from "./axiosMethodCalls";

export const AddNewUser = async(newUser) => {
    try{
        const response = await postAPICall(URL+"users/add", {
            username: newUser.username,
            role_id: 2,
            password: newUser.password,
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}
