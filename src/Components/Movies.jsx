import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Movie from './Movie';
import { fetchMovies } from '../Actions/slices/movieSlice';
import '../styles/Movies.css';

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Movies</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
