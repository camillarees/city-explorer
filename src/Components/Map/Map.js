import React from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.mapContainer = React.createRef();
        this.zoom = 0;
        this.API_KEY = process.env.REACT_APP_MAP_KEY;
    }

    componentDidMount(){
        const { renderMap, lat, lon } = this.props;

        this.map = new maplibregl.Map({
            container: this.mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${this.API_KEY}`,
            center: renderMap !== '' ? [lon, lat] : [0, 0],
            zoom: renderMap !== '' ? 12 : 0
        });
        this.map.addControl(new maplibregl.NavigationControl(), 'top-right');
        new maplibregl.Marker({ color: "#FF0000" })
          .setLngLat([lon, lat])
          .addTo(this.map);
    }

    componentDidUpdate(prevProps) {
        const { renderMap, lat, lon } = this.props;
        if (prevProps.renderMap !== renderMap || prevProps.lat !== lat || prevProps.lon !== lon) {
          // Update the map style, center coordinates, and zoom level when props change
          this.map.setStyle(renderMap);
          this.map.setCenter([lon, lat]);
          if (renderMap !== ''){
            this.map.setZoom(12);
          } else {
            this.map.setZoom(0);
          }
        }
      }

    componentWillUnmount() {
        // Clean up map instance when component is unmounted
          this.map.remove();
      }
    
      render(){
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