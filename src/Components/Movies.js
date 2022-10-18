import React from 'react';
import Movie from './Movie.js';
import Row from 'react-bootstrap/Row';

class Movies extends React.Component {
    render() {
        return (
            <>
                <Row>
                    {this.props.movieData && this.props.movieData.map((movie, idx) => (
                        <Movie
                            key={idx}
                            movie={movie}
                        />
                    ))}
                </Row>
            </>
        )
    }
}

export default Movies;
