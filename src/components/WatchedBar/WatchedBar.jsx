import { useEffect, useState } from "react";
import WatchedSummary from "../WatchedSummary/WatchedSummary";
import WatchedMoviesList from "../WatchedMoviesList/WatchedMoviesList";

function WatchedBar() {
  const [watched, setWatched] = useState([]);

  function handleDeleteWatched(id) {
    setWatched((prevWatched) =>
      prevWatched.filter((movie) => movie.imdbID !== id)
    );

    setWatched((updatedWatched) => {
      localStorage.setItem("watched", JSON.stringify(updatedWatched));
      return updatedWatched;
    });
  }

  useEffect(() => {
    const storedValue = localStorage.getItem("watched");
    const value = storedValue ? JSON.parse(storedValue) : [];
    setWatched(value);
  }, []);

  return (
    <>
      <WatchedSummary watched={watched} />
      <WatchedMoviesList
        watched={watched}
        onDeleteWatched={handleDeleteWatched}
      />
    </>
  );
}

export default WatchedBar;
