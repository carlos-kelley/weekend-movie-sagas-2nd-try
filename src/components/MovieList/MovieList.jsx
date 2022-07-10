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
  const dispatch = useDispatch();
  const movies = useSelector(
    (store) => store.movies
  );
  const history = useHistory();

  const clickDetails = (event) => {
    const movieID = event.currentTarget.id;
    console.log("movieID:", movieID);
    history.push({
      pathname: `/details/${movieID}`,
      id: movieID,
    });
  };

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div
              onClick={clickDetails}
              key={movie.id}
            >
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
