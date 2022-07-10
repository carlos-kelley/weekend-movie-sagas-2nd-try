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
    dispatch({ type: "FETCH_DETAILS" });
    dispatch({ type: "MOVIE_TITLE" });
    console.log(event.currentTarget);
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <h2>{thisMovie.title}</h2>
      <button onClick={backButton}>Back</button>
    </main>
  );
}

export default Details;
