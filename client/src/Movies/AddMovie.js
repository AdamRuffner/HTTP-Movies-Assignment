import React, { useState } from "react";

const initialState = {
  title: "",
  director: "",
  metascore: "",
  stars: "",
};

export default function AddMovie({ addMovie }) {
  const [values, setValues] = useState(initialState);

  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addMovie(values);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          onChange={handleChanges}
          value={values.title}
        />
        <div className="baseline" />
        <label htmlFor="director">Director:</label>
        <input
          type="text"
          name="director"
          onChange={handleChanges}
          value={values.director}
        />
        <div className="baseline" />
        <label htmlFor="metascore">Metascore:</label>
        <input
          type="number"
          name="metascore"
          onChange={handleChanges}
          value={values.metascore}
        />
        <div className="baseline" />
        <label htmlFor="stars">Stars:</label>
        <input
          type="text"
          name="stars"
          onChange={handleChanges}
          value={values.stars}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
