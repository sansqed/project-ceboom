import { postAPICall, getAPICall, URL } from "./axiosMethodCalls";

export const AddHistory = async(data) => {
    try{
        const response = await postAPICall(URL+"/history/add_history", {
            user: data.user_id,
            origin: data.origin,
            destination: data.destination
        })
    } catch {
        return { data: error }
    }
}

export const GetHistory = async() => {
    try{
        const response = await postAPICall(URL+"/histories/get_history", {});
        return { data: response };
    } catch (error) {
        return { data: error }
    }
}