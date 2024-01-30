import styles from "./watchedMovie.module.css";

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li style={{ position: "relative" }}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3 style={{ textAlign: "center", marginTop: "0" }}>{movie.title}</h3>
      <div style={{ fontSize: "18px" }}>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏲</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className={styles["btn-delete"]}
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
