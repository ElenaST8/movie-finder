import styles from "./movieList.module.css";
import Movie from "../Movie/Movie";

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className={`${styles["list"]} ${styles["list-movies"]}`}>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
