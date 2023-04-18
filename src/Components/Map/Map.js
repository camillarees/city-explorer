import React from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.mapContainer = React.createRef();
        this.zoom = 0;
    }

    componentDidMount() {
        const { renderMap, lat, lon } = this.props;
        
        this.map = new maplibregl.Map({
            container: this.mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.REACT_APP_MAP_KEY}`,
            center: renderMap !== '' ? [lon, lat] : [0, 0],
            zoom: renderMap !== '' ? 12 : 0
        });
        this.map.addControl(new maplibregl.NavigationControl(), 'top-right');
        if (!isNaN(lat) && !isNaN(lon)) {
        new maplibregl.Marker({ color: "#FF0000" })
            .setLngLat([lon, lat])
            .addTo(this.map);
    }

}

    componentDidUpdate(prevProps) {
        const { renderMap, lat, lon } = this.props;
        if (prevProps.renderMap !== renderMap || prevProps.lat !== lat || prevProps.lon !== lon) {
            // Update the map style, center coordinates, and zoom level when props change
            if (!isNaN(lat) && !isNaN(lon) && renderMap !== '') {
                this.map.setStyle(renderMap);
                this.map.setZoom(renderMap !== '' ? 12 : 0);
                this.map.setCenter(renderMap !== '' ? [lon, lat] : [0, 0]);
                new maplibregl.Marker({ color: "#FF0000" })
                .setLngLat([lon, lat])
                .addTo(this.map);
            } else {
                console.error('Invalid latitude or longitude values:', lat, lon);
                // Set the map's view to a bounding box that encompasses the entire world
                this.map.fitBounds([[-180, -90], [180, 90]]);
            }
        }
      
    }

    render() {
        return (
            <div className="map-wrap">
                <div
                    className="map"
                    ratio={1 / 1}
                    ref={this.mapContainer}
                >
                    <iframe
                        src={this.props.renderMap}
                        title="city map"
                    />
                </div>
            </div>
        );
    }
}


export default Map;