import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DescriptionPage = ({ movies }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br /><br />
      <button onClick={() => navigate("/")}>🔙 Back to Home</button>
    </div>
  );
};

export default DescriptionPage;
