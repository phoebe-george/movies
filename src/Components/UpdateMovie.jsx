// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMovieDetails, updateMovie } from '../Actions/slices/movieSlice';
// import { Form, Button } from 'react-bootstrap';
// import '../styles/UpdateMovie.css';

// const UpdateMovie = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { movieDetails, loading, error } = useSelector(state => state.movies);
//   // const movieDetails = useSelector(state => state.movies.movieDetails);
//   // const loading = useSelector(state => state.movies.loading);
//   const [formData, setFormData] = useState({ title: "", year: "", description: "", poster: "" });

//   useEffect(() => {
//     if (!movieDetails || movieDetails.id !== parseInt(id)) {
//       // console.log(movieDetails);
//       dispatch(fetchMovieDetails(id));
//     } else {
//       setFormData(movieDetails);
//     }
//   }, [dispatch, id, movieDetails]);

//   useEffect(() => {
//     if (movieDetails && movieDetails.id === parseInt(id)) {
//       setFormData(movieDetails);
//     }
//   }, [movieDetails, id]);
  
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(updateMovie({ id, updatedMovie: formData })).then(() => {
//       navigate(`/movies/${id}`);
//     });
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="update-movie-container">
//       <h1>Update Movie</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formTitle">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="formYear">
//           <Form.Label>Year</Form.Label>
//           <Form.Control
//             type="text"
//             name="year"
//             value={formData.year}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="formDescription">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="formPoster">
//           <Form.Label>Poster Link</Form.Label>
//           <Form.Control
//             type="text"
//             name="poster"
//             value={formData.poster}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Update Movie
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default UpdateMovie;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import '../styles/UpdateMovie.css';

const UpdateMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({ title: "", year: "", description: "", poster: "" });

  useEffect(() => {
    axios.get(`http://localhost:5000/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(error => console.error('There was an error fetching the movie details!', error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/movies/${id}`, movie)
      .then(() => navigate('/'))
      .catch(error => console.error('There was an error updating the movie!', error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  return (
    <div className="update-movie-container">
      <h1>Update Movie</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={movie.title}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formYear">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="text"
            name="year"
            value={movie.year}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={movie.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formPoster">
          <Form.Label>Poster Link</Form.Label>
          <Form.Control
            type="text"
            name="poster"
            value={movie.poster}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Movie
        </Button>
      </Form>
    </div>
  );
};

export default UpdateMovie;
