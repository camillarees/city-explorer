import React from 'react';

class Movies extends React.Component {
    render() {
        return (
            <>
                {this.props.movieData.map((movie, idx) => (
                    <ul key={idx}>
                        <li>
                            <p>title {movie.title}</p>
                            <p>overview {movie.overview}</p>
                            <p>average votes {movie.averageVotes}</p>
                            <p>total votes {movie.totalVotes}</p>
                            <p>poster {movie.imageUrl}</p>
                            <p>popularity{movie.popularity}</p>
                            <p>release date {movie.releaseDate}</p>
                        </li>
                    </ul>

                ))
                }
            </>
        )
    }
}

export default Movies;