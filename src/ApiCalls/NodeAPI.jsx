import { postAPICall } from "./axiosMethodCalls";

export const CreateNodes = async(nodes) => {
    try{
        const response = await postAPICall("https://0bd8-202-92-153-180.ap.ngrok.io/nodes/add", {
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
