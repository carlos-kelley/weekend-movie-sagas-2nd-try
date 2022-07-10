import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useHistory } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  //declare our reducer variables and stores
  const dispatch = useDispatch();
  const movies = useSelector(
    (store) => store.movies
  );
  //setup our history
  const history = useHistory();

  //function to show details on click
  const clickDetails = (event) => {
    const movieID = event.currentTarget.id;
    console.log("movieID:", movieID);
    history.push({
      pathname: `/details/${movieID}`,
      id: movieID,
    });
  };
//fetch movies on mount
  useEffect(() => {
      dispatch({ type: "FETCH_MOVIES" });
      console.log(event.currentTarget);
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {/* loop through our movies and display them */}
        {movies.map((movie) => {
          return (
            <div
              id={movie.id}
              onClick={clickDetails}
              key={movie.id}
            >
              {/* display the movie information */}
              <h3>{movie.title}</h3>
              <img
                src={movie.poster}
                alt={movie.title}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
