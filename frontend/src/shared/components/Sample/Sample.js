import React, { useRef, useEffect, Component } from 'react';
import mapboxgl from 'mapbox-gl';

import './Sample.css';
import Card from '../UI/Card'; 

mapboxgl.accessToken = 'pk.eyJ1IjoidWpqdTEyMCIsImEiOiJja2w5MmxvNWUwbGx1MnJydndnOW9oYnNpIn0.itNhxcQ-FJrtbA5U2pWi2Q';    

class Sample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: props.center.lng,
            lat: props.center.lat,
            zoom: props.zoom
        };
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/ujju120/ckl971vn00nu317sau78zbij7',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }  

    

    render() {
        const style = {
            height : "500px"
        };

        return <div style = {style}>
            <Card>
                <div ref={el => this.mapContainer = el} className = "mapContainer" />
            </Card>
        </div>;
    }
        
}

export default Sample;