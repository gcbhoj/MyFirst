import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="flex">
      <a target="_blank" href={game.gameLink}>
        <div
          key={game.gameId}
          className="min-w-48 h-48 m-1 rounded-md flex flex-col items-center p-1 shadow-md shadow-gray-400 bg-gradient-to-r from-[#D289A5] to-[#A13D63] cursor-pointer mr-10"
        >
          <div className="border m-0.5 w-full h-[85%] overflow-hidden rounded">
            <img
              src={game.thumbnail}
              alt={game.gameName || "Game"}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm font-medium mt-1 text-white text-center">
            {game.gameName}
          </div>
        </div>
      </a>
    </div>
  );
};

export default GameCard;
