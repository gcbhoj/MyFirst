import games from "../games.json";
import Button from "../components/UIComponents/Button.jsx";
import DummyHero from "../components/HeroComponent/DummyHero.jsx";
import GameCard from "../components/GameCard.jsx";

const GamesPage = () => {
  return (
    <div className="min-h-screen flex flex-col m-1">
      <DummyHero statement="Dive into fun and learning with our exciting collection of games" />

      {/* Buttons */}
      <div className="h-12 p-1 flex flex-wrap items-center justify-evenly">
        <Button width="w-20" height="h-10" label="View All" />
        <Button width="w-36" height="h-10" label="Leaderboard" />
      </div>

      {/* Main content */}
      <main className="flex-grow border flex flex-col gap-2">
        {games.map((category) => (
          <div key={category.categoryId}>
            <h3 className="font-serif text-sm m-1">
              Category: {category.category}
            </h3>
            <hr className="mx-1 h-1 rounded-3xl border-0 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" />

            <div className="overflow-x-auto whitespace-nowrap p-2">
              <div className="flex flex-nowrap gap-2">
                {category.games.map((game) => (
                  <GameCard game= {game}/>
                ))}
              </div>
            </div>

            <h3 className="flex justify-end m-1 hover:text-sky-800 hover:italic cursor-pointer">
              View All..
            </h3>
          </div>
        ))}
      </main>
    </div>
  );
};

export default GamesPage;
