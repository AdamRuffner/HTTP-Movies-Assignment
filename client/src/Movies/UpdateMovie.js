import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const initialState = {
  title: "",
  director: "",
  metascore: "",
  stars: "",
};

const UpdateMovie = (props) => {
  const [item, setItem] = useState(initialState);

  const handleChanges = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateMovie(id, item);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => {
        console.log(res.data);
        setItem({ ...res.data, stars: res.data.stars.join(", ") });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          onChange={handleChanges}
          value={item.title}
        />
        <div className="baseline" />
        <label htmlFor="director">Director:</label>
        <input
          type="text"
          name="director"
          onChange={handleChanges}
          value={item.director}
        />
        <div className="baseline" />
        <label htmlFor="metascore">Metascore:</label>
        <input
          type="number"
          name="metascore"
          onChange={handleChanges}
          value={item.metascore}
        />
        <div className="baseline" />
        <label htmlFor="stars">Stars:</label>
        <input
          type="text"
          name="stars"
          onChange={handleChanges}
          value={item.stars}
        />
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
