import React from "react";

const GamesPage = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4">
      <div className="col-span-3 row-span-1 bg-gray-100 p-4 rounded shadow">
        <h2 className="text-xl font-semibold">
          Welcome to Samskrita Bharati Games
        </h2>
        <p className="text-gray-700">
          Explore interactive games designed to help you learn Sanskrit from the
          ground up!
        </p>
      </div>
    </div>
  );
};

export default GamesPage;
