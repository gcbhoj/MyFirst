import { useState, useEffect } from "react";
import InputBox from "../components/UIComponents/InputBox";
import Button from "../components/UIComponents/Button";
import { useParams } from "react-router-dom";
import { updateDoc,doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { getMovieList,getMovieById } from "../services/MovieServices";



const EditMovies = () => {
  const { id } = useParams();
  console.log(id);
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState("");
  const [isNewMovieOscarWinner, setisNewMovieOscarWinner] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      const movie = await getMovieById(id);
      if (movie) {
        console.log(movie)
        
      } else {
        console.error("Movie not found");
      }
    };
    if (id) fetchMovie();
  }, [id]);
  

  const updateMovie = async (id) => {
    const movieDoc = doc(db, "movies", id)
    await updateDoc(movieDoc, {
      title: newMovieTitle,
      releaseDate: newReleaseDate,
      receivedAnOscar: isNewMovieOscarWinner,
    });
    getMovieList();
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
        onChange={(e) => setisNewMovieOscarWinner(e.target.checked)}
      />
      <label> Received an Oscar</label>
      <Button
        width="w-45"
        height="h-12"
        label="update movie"
        onClick={() => {
          updateMovie(id);
        }}
      />
    </div>
  );
};

export default EditMovies;
