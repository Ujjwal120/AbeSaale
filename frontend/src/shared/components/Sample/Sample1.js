import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import './Sample.css';

const Sample1 = (props) => {

    var { center, zoom } = props;

    return <MapContainer center={center} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center}>
            <Popup> A pretty CSS3 popup. <br /> Easily customizable. </Popup>
        </Marker>
    </MapContainer>;
}

export default Sample1;