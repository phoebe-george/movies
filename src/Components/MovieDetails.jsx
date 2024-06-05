import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails, deleteMovie } from '../Actions/slices/movieSlice';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieDetails, loading, error } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [dispatch, id]);

  const handleDelete = async () => {
    await dispatch(deleteMovie(id));
    navigate('/');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movieDetails) return <p>No movie details found.</p>;

  return (
    <div className="movie-details-container">
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.description}</p>
      <div>
        <img src={movieDetails.poster} alt="Movie Poster" className="movie-details-poster" />
      </div>
      <Link to={`/movies/update/${id}`} className="movie-update-link">
        <button className="movie-update-button">Update Movie</button>
      </Link>
      <button className="movie-delete-button" onClick={handleDelete}>Delete Movie</button>
    </div>
  );
};

export default MovieDetails;
