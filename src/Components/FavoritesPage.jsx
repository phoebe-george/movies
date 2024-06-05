import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

const FavoritesPage = () => {
  const movies = useSelector((state) => state.movies.movies);
  const favorites = useSelector((state) => state.movies.favorites);

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  return (
    <Container className="favorites-page">
      <h1 className="text-center my-4">My Favorite Movies</h1>
      <Row>
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((movie) => (
            <Col key={movie.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
              <MovieCard movie={movie} />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center">You have no favorite movies yet.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default FavoritesPage;
