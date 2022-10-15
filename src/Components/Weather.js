import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
    render() {
        return(
            <>
            {this.props.weatherData && this.props.weatherData.map((day, idx) => (
                <div>
                    <WeatherDay
                    key={idx}
                    weather={day}/>
                </div>
            ))}
                </>
        )
    }
}

export default Weather;