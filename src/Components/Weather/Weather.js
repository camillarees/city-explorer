import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
    render() {
        const weatherDataArray = Object.values(this.props.weatherData);
        return(
            <>
                    <WeatherDay weather={weatherDataArray} />
                </>
        )
    }
}

export default Weather;

