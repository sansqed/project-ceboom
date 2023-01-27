import { GetNodes } from "../ApiCalls/NodeAPI";
import { GetRoads } from "../ApiCalls/RoadsAPI";
import { landmarksRaw } from "../Assets/Data/landmarksRaw";
import { intersectionsRaw } from "../Assets/Data/intersectionsRaw";
import { edges } from "../Assets/Data/edges";
import { useEffect } from "react";

export const FetchData = (landmarks, setLandmarks, intersections, setIntersections, setRoads, setAllNodes, isFetchData) => {
  let isServerUp = true;

  const FetchNodes = () => {
    useEffect(() => {
      GetNodes()
        .then((response) => {
          setLandmarks(response.data.data.nodes)
          setIntersections(response.data.data.intersections)
        });

      GetRoads().then((response)=>{
        console.log(response)
        setRoads(response.data.data.edges)
      })
    
    }, []);
  };

  FetchNodes()
  // useEffect(()=>{
  //   if(isFetchData){
  //     if (isServerUp){
  //       FetchNodes()
  //     } else {
  //       setLandmarks(landmarksRaw)
  //       setIntersections(intersectionsRaw)
  //       setRoads(edges)
  //     }
  //   }
  // },[isFetchData])

  useEffect(() => {
    setAllNodes(landmarks.concat(intersections))
  },[landmarks, intersections]);
  
  
}