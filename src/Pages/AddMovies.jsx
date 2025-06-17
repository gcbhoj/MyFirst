import React, { useState } from "react";
import InputBox from "../components/UIComponents/InputBox";
import Button from "../components/UIComponents/Button";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { getMovieList } from "../services/MovieServices.js";

const AddMovies = () => {
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState("");
  const [isNewMovieOscarWinner, setisNewMovieOscarWinner] = useState(false);

  const moviesCollectionRef = collection(db, "movies");
  const addNewMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        receivedAnOscar: isNewMovieOscarWinner,
        userId:auth?.currentUser.uid
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <InputBox
        type="text"
        label="movie title"
        width="w-56"
        height="h-9"
        name="movieTitle"
        onChange={(e) => setNewMovieTitle(e.target.value)}
      />
      <InputBox
        type="date"
        label="release date"
        width="w-56"
        height="h-9"
        name="releaseDate"
        onChange={(e) => setNewReleaseDate(e.target.value)}
      />
      <input
        type="checkbox"
        checked="false"
        onChange={(e) => setisNewMovieOscarWinner(e.target.checked)}
      />
      <label> Received an Oscar</label>
      <Button
        width="w-45"
        height="h-12"
        label="add Movies"
        onClick={addNewMovie}
      />
    </div>
  );
};

export default AddMovies;
