import React from 'react';

class Movie extends React.Component {
    render() {
        return (
            <div>
                {this.props.movieData && this.props.movieData.map(movie => (
                    <Movie
                        movie={movie}
                    />
                ))}
                </div>
        )
    }
}

export default Movie;
