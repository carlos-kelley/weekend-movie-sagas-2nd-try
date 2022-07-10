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
import Details from "../Details/Details";

function MovieList() {
  const [movie, setMovie] = useState("");
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
      console.log(event.currentTarget);
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return (
            <div
              id={movie.id}
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
