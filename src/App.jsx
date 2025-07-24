import React, { useState } from "react";
import MovieList from "./component/MovieList";
import Filter from "./component/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Dreams within dreams",
      posterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "Time, space, and love",
      posterURL:
        "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg",
      rating: 4,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const addMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>🎬 My Movie App</h1>

      <Filter setTitleFilter={setTitleFilter} setRateFilter={setRateFilter} />

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: Number(e.target.value) })
          }
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
