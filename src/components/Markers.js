import React from "react"
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IconLocation } from "./IconLocation";

const Markers = ()=>{
    return <Marker position={{ lat: "9.893575787463098", lng: "-67.38627598911934"}} icon={IconLocation} />
    
}

export default Markers

