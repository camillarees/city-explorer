import React from 'react';
import Movie from './Movie.js'

class Movies extends React.Component {
    render() {
        return (
            <div>
                {this.props.movieData && this.props.movieData.map((movie, idx) => (
                    <Movie
                        key={idx}
                        movie={movie}
                    />
                ))}
                </div>
        )
    }
}

export default Movies;
