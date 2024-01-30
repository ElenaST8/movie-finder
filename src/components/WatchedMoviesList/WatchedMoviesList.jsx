import styles from "./watchedMoviesList.module.css";
import WatchedMovie from "../WatchedMovie/WatchedMovie";

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <div className={styles["box"]}>
      <ul className={`${styles["list"]} ${styles["list-movies"]}`}>
        {watched?.map((movie) => (
          <WatchedMovie
            movie={movie}
            key={movie.imdbID}
            onDeleteWatched={onDeleteWatched}
          />
        ))}
      </ul>
    </div>
  );
}

export default WatchedMoviesList;
