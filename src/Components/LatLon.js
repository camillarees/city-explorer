import React from 'react';

class LatLon extends React.Component {

    render() {
        return (
            <>
                <h2>latitude: {this.props.lat}</h2>
                <h2>longitude: {this.props.lon}</h2>

            </>
        )
    }
}

export default LatLon;