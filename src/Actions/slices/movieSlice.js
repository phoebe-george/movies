import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const res = await axios.get('http://localhost:5000/movies');
  return res.data;
});

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (id) => {
  const res = await axios.get(`http://localhost:5000/movies/${id}`);
  return res.data;
});

export const addMovie = createAsyncThunk('movies/addMovie', async (newMovie, { dispatch }) => {
  await axios.post('http://localhost:5000/movies', newMovie);
  dispatch(fetchMovies());
});

export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (id, { dispatch }) => {
  await axios.delete(`http://localhost:5000/movies/${id}`);
  dispatch(fetchMovies());
});

export const updateMovie = createAsyncThunk('movies/updateMovie', async ({ id, updatedMovie }, { dispatch }) => {
  await axios.put(`http://localhost:5000/movies/${id}`, updatedMovie);
  dispatch(fetchMovies());
});

export const toggleFavorite = createAsyncThunk('movies/toggleFavorite', async (id, { getState }) => {
  const { favorites } = getState().movies;
  const isFavorite = favorites.includes(id);
  const updatedFavorites = isFavorite
    ? favorites.filter(favoriteId => favoriteId !== id)
    : [...favorites, id];
  return updatedFavorites;
});

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    movieDetails: null,
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const movieId = action.payload;
      if (state.favorites.includes(movieId)) {
        state.favorites = state.favorites.filter(id => id !== movieId);
      } else {
        state.favorites.push(movieId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });;
  },
});

export default movieSlice.reducer;
