import React from 'react'
import MovieCard from '../MovieCard'
import "./MovieList.css"


interface IMovies{
    movies : any[]
}
const MovieList  = ({movies}:IMovies) => {
    
    return (
        <div className="movie-list">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    )
}


export default MovieList
