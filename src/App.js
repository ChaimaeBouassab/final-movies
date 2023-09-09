// App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Enola Holmes',
      description: 'Angleterre, 1884. Le matin de son 16e anniversaire, Enola constate que sa mère a disparu. Après avoir vécu une existence assez libre jusque-là, elle se retrouve sous la tutelle de ses frères Sherlock et Mycroft, tous deux décidés à lenvoyer dans une école convenable pour les jeunes femmes de son rang.',
      posterURL: '/jjjjj.png',
      Réalisateur : 'Harry Bradbeer',
      Datedesortieinitiale : '23 septembre 2020',
      rating: 4,
    },
    {
      title: 'The Matrix',
      description: 'Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est lun des pirates les plus recherchés du cyber-espace. À cheval entre deux mondes, Neo est assailli par détranges songes et des messages cryptés provenant dun certain Morpheus. Celui-ci lexhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : quest-ce que la Matrice ?',
      posterURL: '/hhhh.png',
      Datedesortie : '31 mars 1999 (États-Unis)',
      rating: 3,
    },
    // Add more initial movies here
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = (title, rating) => {
    setFilterTitle(title);
    setFilterRating(rating);
  };

  // Filter the movies based on filterTitle and filterRating
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating === parseInt(filterRating))
  );

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter
        handleFilter={handleFilter}
        filterTitle={filterTitle}
        filterRating={filterRating}
      />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          handleAddMovie({
            title: 'No 309',
            description: 'In room number: 309 (no: 309) tv series story, you will explore a love story between Lale and Onur who are forced to marry after their drunken one night stand resulting to an unexpected pregnancy. Will Lale and Onur who are forced to marry for the sake of their unborn baby find love with each other?',
            posterURL: '/pssssssssss.jpg',
            rating: 1,
          })
        }
      >
        Add New Movie
      </button>
    </div>
  );
}

export default App;
