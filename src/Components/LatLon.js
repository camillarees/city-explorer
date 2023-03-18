import React from 'react';
import { Text } from '@mantine/core';

class LatLon extends React.Component {

    render() {
        return (
            <>
                <Text>latitude: {this.props.lat}</Text>
                <Text>longitude: {this.props.lon}</Text>

            </>
        )
    }
}

export default LatLon;