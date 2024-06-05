import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovie, toggleFavorite } from '../Actions/slices/movieSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import '../styles/Movie.css';

const Movie = (props) => {
  const { id, title, year, description, poster } = props;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  const handleDelete = () => {
    dispatch(deleteMovie(id));
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  const isFavorite = favorites.includes(id);

  return (
    <div className="movie-card">
      <div className="movie-info">
        <div>ID: {id}</div>
        <div>Title: {title}</div>
        <div>Year: {year}</div>
        <div>Description: {description}</div>
      </div>
      <div>
        <img src={poster} alt="Movie Poster" className="movie-poster" />
      </div>
      <div className="movie-actions">
        <Link to={`/movies/${id}`} className="movie-details-link">
          <button className="movie-details-button">Movie Details</button>
        </Link>
        <button className="movie-delete-button" onClick={handleDelete}>Delete Movie</button>
        <Link to={`/movies/update/${id}`} className="movie-update-link">
          <button className="movie-update-button">Update Movie</button>
        </Link>
        <button className="favorite-btn" onClick={handleToggleFavorite}>
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;

