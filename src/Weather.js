import React from 'react';

class Weather extends React.Component {

    render() {
        return (
            <>
            {this.props.weatherData.map((day, idx) => (
                <ul key={idx}>
                    <li>
                        <p>date: {day.date}</p>
                        <p>weather: {day.description}</p>
                    </li>
                </ul>

            ))
            }
            </>
        )
    }
}

export default Weather;