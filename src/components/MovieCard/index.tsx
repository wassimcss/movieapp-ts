import React from 'react'
import StarRating from '../StarRating'
import "./MovieCard.css"

interface IMovie { 
    movie:Person
}
interface Person {
    id: number,
      image: string,
      rating: number,
      name: number,
      date: Date,
}

const MovieCard = ({movie}:IMovie) => {
    return (
        <div className="movie-card">
            <img src={movie.image} alt="movie"/>
            <h3>{movie.name}</h3>
            <p>{movie.date}</p>
            <StarRating rating={movie.rating}/>
        </div>
    )
}

export default MovieCard
