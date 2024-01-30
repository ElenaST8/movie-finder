import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Search from "../Search/Search";
import MainContent from "../MainContent";
import Box from "../Box";
import Loader from "../Loader/Loader";
import MovieList from "../MovieList";
import ErrorMessage from "../ErrorMessage";
import MovieDetails from "../MovieDetails";

const KEY = "4c8d9792";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const [watched, setWatched] = useState([]);

  function handleSelectMovie(id) {
    setSelectedId(id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    const prevStor = JSON.parse(localStorage.getItem("watched")) || [];

    const isAlreadyWatched = prevStor.some(
      (watchedMovie) => watchedMovie.imdbID === movie.imdbID
    );

    if (!isAlreadyWatched) {
      setWatched((prevWatched) => [...prevWatched, movie]);
      localStorage.setItem("watched", JSON.stringify([...prevStor, movie]));
    }
  }

  useEffect(() => {
    const storedValue = localStorage.getItem("watched");
    const value = storedValue ? JSON.parse(storedValue) : [];
    setWatched(value);
  }, []);

  useEffect(
    function () {
      const timerId = setTimeout(() => {
        async function fetchMovies() {
          try {
            setIsLoading(true);
            setError("");

            const res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
            );

            if (!res.ok)
              throw new Error("Something went wrong with fetching movies");

            const data = await res.json();
            if (data.Response === "False") throw new Error("Movie not found");

            setMovies(data.Search);
            setError("");
          } catch (err) {
            setError(err.message);
          } finally {
            setIsLoading(false);
          }
        }

        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }

        fetchMovies();
      }, 300);

      return () => {
        clearTimeout(timerId);
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
      </NavBar>

      <MainContent>
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
        </Box>

        {selectedId && (
          <MovieDetails
            selectedId={selectedId}
            onCloseMovie={handleCloseMovie}
            onAddWatched={handleAddWatched}
            watched={watched}
          />
        )}
      </MainContent>
    </>
  );
}

export default SearchBar;
