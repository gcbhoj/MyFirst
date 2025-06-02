import React from "react";
import Button from "../components/UIComponents/Button.jsx";
import CategoryContainer from "../Layout/CategoryContainer.jsx";
import games from "../games.json";
import DummyHero from "../components/HeroComponent/DummyHero.jsx";

const GamesPage = () => {
  
  return (
    <div className="min-h-screen flex flex-col">
      <DummyHero statement="Dive into fun and learning with our exciting collection of games" />

      {/* Buttons */}
      <div className="border h-12 p-1 flex flex-wrap items-center justify-evenly">
        <Button width="w-20" height="h-10" label="View All" />
        <Button width="w-36" height="h-10" label="leaderboard" />
      </div>

      {/* Main content grows */}
      <main className="flex-grow border-2 p-1 flex flex-wrap">
        {games.map((category) => (
          <CategoryContainer
            key={category.category}
            categoryName={category.category}
            categoryId={category.categoryId}
            games={category.games}
          />
        ))}
      </main>
    </div>
  );
};

export default GamesPage;
