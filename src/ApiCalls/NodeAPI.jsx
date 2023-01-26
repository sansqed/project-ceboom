import { async } from "q";
import { postAPICall, getAPICall, URL } from "./axiosMethodCalls";

export const CreateNodes = async(nodes) => {
    try{
        const response = await postAPICall(URL+"nodes/add", {
            names: nodes.map(x => x.name),
            landmark_types: nodes.map(x => x.type == ""? "others": x.type),
            latitudes: nodes.map(x => x.lat),
            longitudes: nodes.map(x => x.lon),
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
    
}

export const GetNodes = async() => {
    try{
        const response = await postAPICall(URL+"nodes/get_all",{});
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}