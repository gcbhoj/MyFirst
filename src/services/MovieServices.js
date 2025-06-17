import { db } from "../config/firebase";
import { getDocs, collection,doc,getDoc } from "firebase/firestore";

const moviesCollectionRef = collection(db, "movies");

export const getMovieList = async () => {
  const data = await getDocs(moviesCollectionRef);
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getMovieById = async (id) => {
  const movieDocRef = doc(db, "movies", id);
  const movieSnap = await getDoc(movieDocRef);
  if (movieSnap.exists()) {
    return { id: movieSnap.id, ...movieSnap.data() };
  } else {
    return null; // or throw an error
  }
};
