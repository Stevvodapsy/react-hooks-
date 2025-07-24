import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 20, margin: 10, width: 250 }}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
