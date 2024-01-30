import { useEffect, useState } from "react";
import styles from "./movieDetails.module.css";
import Loader from "../Loader/Loader";
import StarRating from "../StarRating";

const KEY = "4c8d9792";

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const watchedMovie = watched.find((movie) => movie.imdbID === selectedId);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      imdbRating: Number(movie.imdbRating),
      runtime: Number(movie.Runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  return (
    <div className={styles["details"]}>
      <div className={styles["details-info"]}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div style={{ position: "relative" }}>
              <button className={styles["btn-back"]} onClick={onCloseMovie}>
                &#9747;
              </button>

              <div className={styles["blocks"]}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={movie.Poster}
                    alt={`Poster of ${movie.Title} movie`}
                  />
                </div>

                <div className={styles["details-overview"]}>
                  <h2>{movie.Title}</h2>
                  <p>
                    {movie.Released} &bull; {movie.Runtime}
                  </p>
                  <p>{movie.Genre}</p>
                  <p>
                    <span>⭐️</span>
                    {movie.imdbRating} IMDb rating
                  </p>

                  <div className="rating">
                    {!watchedMovie ? (
                      <>
                        <StarRating onSetRating={setUserRating} />
                        {userRating > 0 && (
                          <button
                            className={styles["btn-add"]}
                            onClick={handleAdd}
                          >
                            + Add to list
                          </button>
                        )}
                      </>
                    ) : (
                      <p>
                        You rated this movie {watchedMovie.userRating}
                        <span>⭐️</span>
                      </p>
                    )}
                  </div>

                  <p>
                    <em>{movie.Plot}</em>
                  </p>
                  <p>Starring {movie.Actors}</p>
                  <p>Directed by {movie.Director}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
