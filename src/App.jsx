import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './component/MovieList';
import DescriptionPage from './component/DescriptionPage';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending sci-fi thriller.",
      posterURL: "https://...",
      rating: 5,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "Interstellar",
      description: "Journey through space and time.",
      posterURL: "https://...",
      rating: 4,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    }
    // ... more movies
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<DescriptionPage movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
