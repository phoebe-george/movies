import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../Actions/slices/movieSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.movies.favorites);
  const isFavorite = favorites.includes(movie.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(movie.id));
  };

  return (
    <Card className="movie-card">
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="link" onClick={handleFavoriteClick}>
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
