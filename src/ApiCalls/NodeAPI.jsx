import { async } from "q";
import { postAPICall, getAPICall } from "./axiosMethodCalls";

export const CreateNodes = async(nodes) => {
    try{
        const response = await postAPICall("https://7e01-111-125-90-19.ap.ngrok.io/nodes/add", {
            names: nodes.map(x => x.name),
            landmark_types: nodes.map(x => x.landmark_type == ""? "others": x.landmark_type),
            locations: nodes.map(x => x.location),
            latitudes: nodes.map(x => x.latitude),
            longitudes: nodes.map(x => x.longitude),
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
    
}

export const GetNodes = async() => {
    try{
        const response = await postAPICall("https://0f5e-202-92-153-180.ap.ngrok.io/nodes/get_all",{});
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}