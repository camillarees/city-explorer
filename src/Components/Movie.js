import React from 'react';
import { Col, Card } from 'react-bootstrap';

class Movie extends React.Component {
    render() {
        return (
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.movie.imageUrl} />
                        <Card.Body>
                            <Card.Title>{this.props.movie.title}</Card.Title>
                            <Card.Text> overview: {this.props.movie.overview} </Card.Text>
                            <Card.Text> total votes: {this.props.movie.totalVotes}</Card.Text>
                            <Card.Text> average votes: {this.props.movie.averageVotes}</Card.Text>
                            <Card.Text> popularity: {this.props.movie.popularity}</Card.Text>
                            <Card.Text> release date {this.props.movie.releaseDate}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        )
    }
}

export default Movie;