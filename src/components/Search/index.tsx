import * as React from "react";
import StarRating from "../StarRating";
// import StarRating from "../StarRating";
import "./Search.css";

interface ISearch {
  searchValue:string,
  rating:number,
  handleChange: (event:ITarget ) => void,
  handleSearchRate:(rating:number) => void
 
}
export interface ITarget {
  target: {
    value: React.SetStateAction<string>;
  };
  preventDefault(): void;
}

const Search = ({handleChange,searchValue,rating,handleSearchRate}:ISearch) => {
  return (
    <div className="header-container">
      <h1>Movie App</h1>
      <div className="serach-container">
        <input type="text" onChange={handleChange} value={searchValue}  />
        <StarRating rating={rating} handleSearchRate={handleSearchRate} />
      </div>
    </div>
  );
};

export default Search;
