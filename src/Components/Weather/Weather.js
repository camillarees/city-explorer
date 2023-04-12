import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
    render() {
        const { submitted } = this.props;
        const weatherDataArray = Object.values(this.props.weatherData);
        return(
            <>
               {submitted && (
                    <WeatherDay weather={weatherDataArray} />
               )}
                </>
        )
    }
}

export default Weather;

