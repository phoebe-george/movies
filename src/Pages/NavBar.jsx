import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const favoriteCount = useSelector(state => state.movies.favorites.length);

  return (
    <div style={{ backgroundColor: "yellowgreen", display: "flex", justifyContent: "space-around", padding: 5 }}>
      <Link to="/">Movies Page</Link>
      <Link to="/addMovie">Add Movie</Link>
      <Link to="/about">About</Link>
      <Link to="/contactUs">Contact Us</Link>
      <Link to="/favorites">Favorites Page</Link>
      <div>Favorites: {favoriteCount}</div>
    </div>
  );
};

export default NavBar;
