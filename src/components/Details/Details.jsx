import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useHistory } from "react-router-dom";
import MovieList from "../MovieList/MovieList";
import { useParams } from "react-router-dom";
// import "./MovieList/MovieList.css";

function Details(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const genres = useSelector(
    (store) => store.genres
  );
  const movies = useSelector(
    (store) => store.movies
  );
  const thisID = useParams();
  const thisMovie = movies.find(
    (movie) => movie.id === Number(thisID.id)
  );

  const backButton = () => {
    history.push("/");
  };

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
    dispatch({
      type: "FETCH_GENRES",
      payload: thisID.id,
    });
    console.log("ID:", thisID);
    console.log(event.currentTarget);
    console.log("genre:", genres);
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <h2>{thisMovie.title}</h2>
      <img src={thisMovie.poster} />
      <h3> {thisMovie.description}</h3>

      {genres.map((genre, i) => (
        <p key={i}>{genre.name}</p>
      ))}
      <button onClick={backButton}>Back</button>
    </main>
  );
}

export default Details;
