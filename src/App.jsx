import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage";
import Auth from "./Pages/SignUpPage";
import GamesPage from "./Pages/GamesPage";
import Dashboard from "./Pages/Dashboard";
import Feedback from "./Pages/Feedback";
import GamesPanel from "./Pages/GamesPanel";
import AddEvents from "./Pages/AddEvents";
import AddImages from "./Pages/AddImages";
import ViewFeedback from "./Pages/ViewFeedback";
import Gallery from "./Pages/Gallery";
import ViewMovies from "./Pages/ViewMovies";
import Movies from "./Pages/Movies";
import AddMovies from "./Pages/AddMovies";
import EditMovies from "./Pages/EditMovies";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/signUp" element={<Auth />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/gamesPanel" element={<GamesPanel />} />
      <Route path="/addEvents" element={<AddEvents />} />
      <Route path="/addImages" element={<AddImages />} />
      <Route path="/viewFeedback" element={<ViewFeedback />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/viewMovies" element={<ViewMovies />} />
      <Route path="/addMovies" element={<AddMovies />} />
      <Route path="/editMovies/:id" element={<EditMovies />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
