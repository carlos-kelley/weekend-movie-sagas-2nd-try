//imports
import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function Details() {
  //declare our reducer variables and stores
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector(
    (store) => store.genres
  );
  const movie = useSelector(
    (store) => store.movies
  );

  //use to get the id from the url
  const thisID = useParams();
  //I chose to use find instead of map because I only need one movie
  const thisMovie = movie.find(
    (movie) => movie.id === Number(thisID.id)
  );

  const backButton = () => {
    history.push("/");
  };

  //fetch movies and genres on mount
  useEffect(() => {
    console.log("Movies in details:", movie);
    dispatch({
      type: "FETCH_MOVIES",
    });
    dispatch({
      type: "FETCH_GENRES",
      payload: thisID.id,
    });
    console.log("ID:", thisMovie);
    console.log("genre:", genres);
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <h2>{thisMovie.title}</h2>
      <img src={thisMovie.poster} />
      <h5> {thisMovie.description}</h5>
      Genres:{" "}
      {/* loop through our genres and display them */}
      {genres.map((genre, i) => (
        <p key={i}>{genre.name}</p>
      ))}
      <button onClick={backButton}>Back</button>
    </main>
  );
}

export default Details;
