import React, { FC, useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import { moviesData } from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [rating, setRating] = useState(1);
  const [movies, setMovies] = useState(moviesData);
  const handleChange = (
    event: React.ChangeEventHandler<HTMLInputElement> | any
  ) => setSearchValue(event.target.value);
  const handleSearchRate = (rate: number) => setRating(rate);
  const handleSubmit = (movie: any) => setMovies([...movies, movie]);
  return (
    <div className="App">
      <Search
        handleChange={handleChange}
        searchValue={searchValue}
        rating={rating}
        handleSearchRate={handleSearchRate}
      />
      <MovieList
        movies={movies.filter((movie) =>
          movie.name.trim()
            .toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase()) && movie.rating>= rating
        )}
      />
      <AddMovie handleSubmit={handleSubmit}/>
    </div>
  );
};

export default App;
