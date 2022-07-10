import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function Details() {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector(
    (store) => store.genres
  );
  const movie = useSelector(
    (store) => store.movies
  );
  let { movieID } = useParams();

  const backButton = () => {
    history.push("/");
  };

  useEffect(() => {
    console.log("Movies in details:", movie);
    dispatch({
      type: "FETCH_MOVIES",
      payload: movieID,
    });
    dispatch({
      type: "FETCH_GENRES",
      payload: movieID,
    });
    console.log("ID:", movieID);
    console.log("genre:", genres);
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <h2>{movie[0].title}</h2>
      <img src={movie[0].poster} />
      <h3> {movie[0].description}</h3>
      <h3>
        Genres:
        {genres.map((genre) => `${genre.name}`)}
      </h3>

      <button onClick={backButton}>Back</button>
    </main>
  );
}

export default Details;
