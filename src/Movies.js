import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class Movies extends React.Component {
    render() {
        return (
            <Row>
                {this.props.movieData.map(movie => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movie.imageUrl} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text> overview: {movie.overview} </Card.Text>
                                <Card.Text> total votes: {movie.totalVotes}</Card.Text>
                                <Card.Text> average votes: {movie.averageVotes}</Card.Text>
                                <Card.Text> popularity: {movie.popularity}</Card.Text>
                                <Card.Text> release date {movie.releaseDate}</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ) ) }
                        </Row>
        )
    }
}

export default Movies;

