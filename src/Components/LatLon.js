import React from 'react';
import { Text } from '@mantine/core';

class LatLon extends React.Component {

    render() {
        return (
            <>
                <Text size="lg">{this.props.lat} °N {this.props.lon} °W</Text>

            </>
        )
    }
}

export default LatLon;