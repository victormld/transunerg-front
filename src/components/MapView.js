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
        {/* parada agronomia */}
        <Marker position={{ lat: "9.900806121609884", lng: "-67.39686540049382"}}/>
        {/* parada informatica */}
        <Marker position={{ lat: "9.897274079749067", lng: "-67.39139727353472"}}/>
        {/* {parada medicina} */}
        <Marker position={{ lat: "9.893575787463098", lng: "-67.38627598911934"}}/>
        {/* vista hermosa */}
        <Marker position={{ lat: "9.912694097984248", lng: "-67.36143756523738"}}/>
        {/* villa olimpica */}
        <Marker position={{ lat: "9.917578179998147", lng: "-67.36836756537615"}}/>
        {/* Banco Venezuela */}
        <Marker position={{ lat: "9.910548952437733", lng: "-67.3589334170435"}}/>
        {/* puerta negra*/}
        <Marker position={{ lat: "9.90353261402284", lng: "-67.37217688365276"}}/>
        {/* circuito */}
        <Marker position={{ lat: "9.899999124470032", lng: "-67.37974460539726"}}/>
        
    </MapContainer>
}

export default MapView