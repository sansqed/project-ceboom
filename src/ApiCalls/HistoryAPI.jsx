import { postAPICall, URL } from "./axiosMethodCalls";

export const AddHistory = async(user_id, origin, destination) => {
    try{
        const response = await postAPICall(URL+"histories/add", {
            user_id: user_id,
            origin: origin,
            destination: destination,
        })
        return { data:response }
    } catch (error) {
        return { data: error }
    }
}

export const GetHistory = async() => {
    try{
        const response = await postAPICall(URL+"histories/get", {});
        return { data: response };
    } catch (error) {
        return { data: error }
    }
}