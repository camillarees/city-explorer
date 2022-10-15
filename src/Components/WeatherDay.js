
import React from 'react';

class WeatherDay extends React.Component {

    render() {
        return (
            <>
            
                <ul>
                    <li>
                        <p>date: {this.props.date}</p>
                        <p>weather: {this.props.description}</p>
                    </li>
                </ul>


            </>
        )
    }
}

export default WeatherDay;