import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10, width: 250 }}>
      <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
      <h3>{movie.title}</h3>
      <p>{movie.description.substring(0, 60)}...</p>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
