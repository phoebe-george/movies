import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMovie } from '../Actions/slices/movieSlice';
import { useNavigate } from 'react-router-dom';
import '../styles/AddMovie.css';

const AddMovie = () => {
  const [movie, setMovie] = useState({ title: '', year: '', description: '', poster: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMovie(movie));
    setMovie({ title: '', year: '', description: '', poster: '' });
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMovie((oldMovie) => ({ ...oldMovie, [name]: value }));
  };

  return (
    <Container className="add-movie-container">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1 className="text-center mb-4">Add Movie</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={movie.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formYear" className="mb-3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={movie.year}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={movie.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPoster" className="mb-3">
              <Form.Label>Poster Link</Form.Label>
              <Form.Control
                type="url"
                name="poster"
                value={movie.poster}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Add Movie
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddMovie;


// // AddMovie.js
// import React, { useState } from 'react';
// import { Form, Button, Container } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { addMovie } from '../Actions/slices/movieSlice';
// import { useNavigate } from 'react-router-dom';
// import '../styles/AddMovie.css';

// const AddMovie = () => {
//   const [movie, setMovie] = useState({ title: '', year: '', description: '', poster: '' });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     dispatch(addMovie(movie));
//     setMovie({ title: '', year: '', description: '', poster: '' });
//     navigate('/');
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setMovie((oldMovie) => ({ ...oldMovie, [name]: value }));
//   };

//   return (
//     <Container className="add-movie-container">
//       <h1>Add Movie</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formTitle">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             type="text"
//             name="title"
//             value={movie.title}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="formYear">
//           <Form.Label>Year</Form.Label>
//           <Form.Control
//             type="text"
//             name="year"
//             value={movie.year}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="formDescription">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             name="description"
//             value={movie.description}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="formPoster">
//           <Form.Label>Poster Link</Form.Label>
//           <Form.Control
//             type="text"
//             name="poster"
//             value={movie.poster}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Add Movie
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default AddMovie;