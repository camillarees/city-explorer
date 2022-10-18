
import React from 'react';

class WeatherDay extends React.Component {

    render() {
        return (
            <>
             <h2>{this.props.weather.date}: {this.props.weather.description.toLowerCase()}</h2>

            </>
        )
    }
}

export default WeatherDay;