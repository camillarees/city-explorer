import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

class Movie extends React.Component {
    render() {
        return (
            <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={this.props.imageUrl} />
                            <Card.Body>
                                <Card.Title>{this.props.title}</Card.Title>
                                <Card.Text> overview: {this.props.overview} </Card.Text>
                                <Card.Text> total votes: {this.props.totalVotes}</Card.Text>
                                <Card.Text> average votes: {this.props.averageVotes}</Card.Text>
                                <Card.Text> popularity: {this.props.popularity}</Card.Text>
                                <Card.Text> release date {this.props.releaseDate}</Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                
                        </Row>
        )
    }
}

export default Movie;