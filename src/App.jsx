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
import AddGames from "./Pages/AddGames";
import AddEvents from "./Pages/AddEvents";
import AddImages from "./Pages/AddImages";
import ViewFeedback from "./Pages/ViewFeedback";
import Gallery from "./Pages/Gallery";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/signUp" element={<Auth />} />
      <Route path="/games" element={<GamesPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/addGames" element={<AddGames />} />
      <Route path="/addEvents" element={<AddEvents />} />
      <Route path="/addImages" element={<AddImages />} />
      <Route path="/viewFeedback" element={<ViewFeedback />} />
      <Route path="/gallery" element={<Gallery />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
