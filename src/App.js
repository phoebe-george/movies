// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavBar from "./Pages/NavBar";
// import About from "./Pages/About";
// import ContactUs from "./Pages/ContactUs";
// import MoviesPage from "./Pages/MoviesPage";
// import NotFound from "./Pages/NotFound";
// import MovieDetails from "./Components/MovieDetails";
// import AddMovie from "./Components/AddMovie";
// import UpdateMovie from "./Components/UpdateMovie";
// import axios from 'axios';

// const fetchData = async () => {
//   const res = await axios.get('http://localhost:5000/movies');
//   return res.data;
// };

// function App() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const getMovies = async () => {
//       const moviesData = await fetchData();
//       setMovies(moviesData);
//     };
//     getMovies();
//   }, []);

//   const addMovie = async (newMovie) => {
//     await axios.post('http://localhost:5000/movies', newMovie);
//     const updatedMovies = await fetchData();
//     setMovies(updatedMovies);
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<MoviesPage movies={movies} />} />
//           <Route path="addMovie" element={<AddMovie addMovieFun={addMovie} />} />
//           <Route path="/movies/:id" element={<MovieDetails />} />
//           <Route path="/movies/update/:id" element={<UpdateMovie />} /> 
//           <Route path="about" element={<About />} />
//           <Route path="contactUs" element={<ContactUs />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./Actions/Store";
import NavBar from "./Pages/NavBar";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import MoviesPage from "./Pages/MoviesPage";
import NotFound from "./Pages/NotFound";
import MovieDetails from "./Components/MovieDetails";
import AddMovie from "./Components/AddMovie";
import UpdateMovie from "./Components/UpdateMovie";
import FavoritesPage from "./Components/FavoritesPage";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="addMovie" element={<AddMovie />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/update/:id" element={<UpdateMovie />} /> 
          <Route path="about" element={<About />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
