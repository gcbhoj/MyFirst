import React from "react";
import Button from "../components/UIComponents/Button.jsx";
import DummyHero from "../components/HeroComponent/DummyHero.jsx";
import games from "../games.json";
import AdminContainer from "../components/AdminContainer.jsx";

const GamesPanel = () => {
  return (
    <>
      <DummyHero statement="Manage, update, and explore all games" />
      <div className="border m-1 flex flex-wrap items-center justify-evenly h-14">
        {games.map((category) => (
          <Button
            width="w-35"
            height="h-12"
            label={`Add to ${category.category}`}
            key={category.categoryId}
          />
        ))}
      </div>
      <div className="border m-1 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <AdminContainer />
        <AdminContainer />
        <AdminContainer />
        <AdminContainer />
        
      </div>
    </>
  );
};

export default GamesPanel;
