import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
    render() {
        return(
            <>
            {this.props.weatherData && this.props.weatherData.map((day, idx) => (
                    <WeatherDay
                    key={idx}
                    weather={day}/>
            ))}
                </>
        )
    }
}

export default Weather;

