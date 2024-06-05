import React from 'react';
import AddMovie from '../Components/AddMovie';

const AddMoviePage = ({ addMovieFun }) => {
  return (
    <div>
      <h1>Add Movie</h1>
      <AddMovie addMovieFun={addMovieFun} />
    </div>
  );
};

export default AddMoviePage;
