import { postAPICall } from "./axiosMethodCalls";

export const CreateRoads = async(roads) => {
    try{
        const response = await postAPICall("https://1b9b-111-125-90-19.ap.ngrok.io/edges/add", {
            // node_id_As: roads.map(x => x.endPointA ),
            // node_id_Bs: roads.map(x => x.endpointB),
            node_id_As: [4],
            node_id_Bs: [5],
            coords: roads.map(x => x.latlngs.map(y => [y.lat, y.lng])   ),
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}