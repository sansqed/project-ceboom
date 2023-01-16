import React from "react";
import PropTypes from "prop-types";

import {Marker} from "react-leaflet"
import L, { latLng } from "leaflet"

import './Markers.css'
import { emphasize } from "@mui/system";

// var test = [{type: "Hospitals", cords: [10.253781, 123.838469]},
// {type: "Cemetaries", cords: [10.263133, 123.839979]},
// {type: "Barangay Halls", cords: [10.563133, 123.839979]}]

var markerIcon = L.Icon.extend({
    options:{
        iconSize: [35,35]
    }
});

const airportIcon = new markerIcon({iconUrl: require('../../Assets/icons/Airport.png')}),
barIcon = new markerIcon({iconUrl: require('../../Assets/icons/Bar.png')}),
barangayHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/BarangayHall.png')}),
busStationIcon = new markerIcon({iconUrl: require('../../Assets/icons/BusStation.png')}),
cemetaryIcon = new markerIcon({iconUrl: require('../../Assets/icons/Cemetery.png')}),
churchIcon = new markerIcon({iconUrl: require('../../Assets/icons/Church.png')}),
cityHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/CityHall.png')}),
fireStationIcon = new markerIcon({iconUrl: require('../../Assets/icons/FireStation.png')}),
healthCenterIcon = new markerIcon({iconUrl: require('../../Assets/icons/HealthCenter.png')}),
hospitalIcon = new markerIcon({iconUrl: require('../../Assets/icons/Hospital.png')}),
mallDepartmentIcon = new markerIcon({iconUrl: require('../../Assets/icons/MallDepartment.png')}),
municipalHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/MunicipalHall.png')}),
policeStationIcon = new markerIcon({iconUrl: require('../../Assets/icons/PoliceStation.png')}),
portIcon = new markerIcon({iconUrl: require('../../Assets/icons/Port.png')}),
publicMarketIcon = new markerIcon({iconUrl: require('../../Assets/icons/PublicMarket.png')}),
restaurantIcon = new markerIcon({iconUrl: require('../../Assets/icons/Restaurant.png')}),
schoolIcon = new markerIcon({iconUrl: require('../../Assets/icons/School.png')}),
templeIcon = new markerIcon({iconUrl: require('../../Assets/icons/Temple.png')}),
touristSpotIcon = new markerIcon({iconUrl: require('../../Assets/icons/TouristSpot.png')})

function locationChecker(location){
    // console.log(location)
    if(location == undefined){
        // console.log("bobo")
    }

    if(location === "Hospitals"){
        return hospitalIcon
    }else if(location === "Health Centers"){
        return healthCenterIcon
    }else if(location === "Pharmacies"){
        return hospitalIcon
    }else if(location === "Barangay Halls"){
        return barangayHallIcon
    }else if(location === "Malls/Department Stores"){
        return mallDepartmentIcon
    }else if(location === "Markets"){
        return publicMarketIcon
    }else if(location === "City Halls"){
        return cityHallIcon
    }else if(location === "Schools"){
        return schoolIcon
    }else if(location === "Bars"){
        return barIcon
    }else if(location === "Police Stations"){
        return policeStationIcon
    }else if(location === "Fire Stations"){
        return fireStationIcon
    }else if(location === "Churches"){
        return churchIcon
    }else if(location === "Restaurants"){
        return restaurantIcon
    }else if(location === "Tourist Spots" || location === "Tourist spots"){
        return touristSpotIcon
    }else if(location === "Cemetaries"){
        return cemetaryIcon
    }else if(location === "Police Stations"){
        return policeStationIcon
    }else if(location === "Municipal Halls" || location === "Municipal halls"){
        return municipalHallIcon
    }else if(location === "Ports"){
        return portIcon
    }else{
        return airportIcon
    }
}

const MarkerLayer = (data) => {
    if (data.data.lat != undefined){

        return(
        <div>
            <Marker position = {[data.data.lat,data.data.lon]} icon = {locationChecker(data.data.type)}></Marker>
        </div>
        )
    }
}

// var barangayHallIcon = new markerIcon({iconUrl: require('../../Assets/icons/Airport.png')});

MarkerLayer.propTypes = {
    data: PropTypes.object,
}

export default MarkerLayer