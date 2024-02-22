import React from "react"
import { MapContainer, Marker, TileLayer } from "react-leaflet";
//import Markers from './Markers'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// Manually set the default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MapView = ()=>{
    return <MapContainer center={{ lat: "9.892970652555023", lng: "-67.38683018820838" }} zoom={15}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={{ lat: "9.893575787463098", lng: "-67.38627598911934"}}/>
    </MapContainer>
}

export default MapView