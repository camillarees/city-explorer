
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class WeatherDay extends React.Component {

    render() {
        return (
            <>
             <ListGroup className="list-group">
                <ListGroupItem>{this.props.weather.date} forecast: {this.props.weather.description.toLowerCase()}</ListGroupItem>
              </ListGroup>

            </>
        )
    }
}

export default WeatherDay;