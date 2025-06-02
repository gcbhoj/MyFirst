import React from "react";
import DisplayContainer from "../components/DisplayContainer";

const CategoryContainer = ({ categoryName, categoryId, games }) => {
  return (
    <div className="w-full h-full overflow-x-hidden flex flex-col m-10">
      <h3 className="text-md font-serif text-amber-900 mb-1 pr-1">
        Category Name: {categoryName}
      </h3>

      <div className="h-full w-full overflow-y-hidden overflow-x-visible flex gap-5 p-2">
        {games.map((game) => (
          <DisplayContainer
            key={game.gameId || game.imageId}
            gameId={game.gameId || game.imageId}
            gameLink={game.gameLink}
            imageSrc={game.thumbnail||game.imageSrc}
            gameName={game.gameName}
          />
        ))}
      </div>

      <div className="flex justify-end pr-2">
        <p
          key={categoryId}
          onClick={() => {
            console.log(categoryId);
          }}
        >
          view all..
        </p>
      </div>
    </div>
  );
};

export default CategoryContainer;
