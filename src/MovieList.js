// MovieList.js

import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie">
          <div className="logo">
            <img src="/ppppppp.png" alt="Logo" className="logo-image" /> {/* Apply the CSS class */}
          </div>
          <img
            src={movie.posterURL}
            alt={movie.title}
            className="movie-poster"
          />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Réalisateur : {movie.Réalisateur}</p>
          <p>Date de sortie initiale : {movie.Datedesortieinitiale}</p>
          <p>Rating : {movie.rating}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
