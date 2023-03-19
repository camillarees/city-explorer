import React from 'react';
import { Text } from '@mantine/core';

class LatLon extends React.Component {

    render() {
        return (
            <>
                <Text size="xl">coordinates: {this.props.lat} & {this.props.lon}</Text>

            </>
        )
    }
}

export default LatLon;