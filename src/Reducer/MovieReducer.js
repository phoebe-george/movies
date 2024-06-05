import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    ADD_MOVIE_SUCCESS,
    DELETE_MOVIE_SUCCESS,
    UPDATE_MOVIE_SUCCESS
  } from '../Actions/MovieActions';
  
  const initialState = {
    movies: [],
    loading: false,
    error: null
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES_REQUEST:
        return { ...state, loading: true };
      case FETCH_MOVIES_SUCCESS:
        return { ...state, loading: false, movies: action.payload };
      case FETCH_MOVIES_FAILURE:
        return { ...state, loading: false, error: action.error };
      case ADD_MOVIE_SUCCESS:
        return { ...state, movies: [...state.movies, action.payload] };
      case DELETE_MOVIE_SUCCESS:
        return { ...state, movies: state.movies.filter(movie => movie.id !== action.payload) };
      case UPDATE_MOVIE_SUCCESS:
        return {
          ...state,
          movies: state.movies.map(movie => 
            movie.id === action.payload.id ? action.payload.updatedMovie : movie
          )
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  