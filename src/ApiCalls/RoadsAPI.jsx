
import { postAPICall, URL } from "./axiosMethodCalls";

export const CreateRoads = async(roads) => {
    try{
        const response = await postAPICall(URL+"edges/add", {

            node_id_As: roads.map(x => x.endPointA ),
            node_id_Bs: roads.map(x => x.endpointB),
            // node_id_As: [4],
            // node_id_Bs: [5],
            coords: roads.map(x => x.latlngs.map(y=> [y.lat,y.lng])),
        });
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}

export const GetRoads = async() => {
    try{
        const response = await postAPICall(URL+"edges/get_all",{});
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}

export const shortestPath = async(origin, dest) => {
    try{
        console.log(origin + "/" + dest)
        const response = await postAPICall(URL+"graphs/get_shortest_path/" + origin +"/" + dest, {
            
        });

        return { data: response};
    } catch (error) {
        return { data: error };
    }
}

export const SetTraffic = async(id, val) => {
    try{
        const response = await postAPICall(URL+"edges/traffic/" + id + "/" + val);
        return { data: response};
    } catch (error) {
        return { data: error };
    }
}