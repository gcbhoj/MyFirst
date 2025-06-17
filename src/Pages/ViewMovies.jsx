import React, { useEffect, useState } from "react";
import { getMovieList } from "../services/MovieServices";
import Button from "../components/UIComponents/Button";
import { FcFullTrash } from "react-icons/fc";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { RiEditLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ViewMovies = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieList().then(setMovieList).catch(console.error);
  }, []);

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    getMovieList();
  };

  return (
    <div>
      {movieList.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movieList.map((movie) => (
          <div key={movie.id}>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>Date: {movie.releaseDate}</p>
            <Button
              width="w-10"
              height="h-10"
              icon={<FcFullTrash />}
              border="border-0"
              onClick={() => deleteMovie(movie.id)}
            />
            <Link to={`/editMovies/${movie.id}`}>
              <Button
                width="w-10"
                height="h-10"
                icon={<RiEditLine />}
                border="border-0"
              />
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ViewMovies;
