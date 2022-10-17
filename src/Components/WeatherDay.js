
import React from 'react';

class WeatherDay extends React.Component {

    render() {
        return (
            <>
            
                <ul>
                    <li>
                        <p>date: {this.props.weather.date}</p>
                        <p>weather: {this.props.weather.description}</p>
                    </li>
                </ul>


            </>
        )
    }
}

export default WeatherDay;