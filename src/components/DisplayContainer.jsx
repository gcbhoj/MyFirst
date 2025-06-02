import React from "react";
import { Link } from "react-router-dom";

const DisplayContainer = ({ gameId, gameName, gameLink, imageSrc  }) => {
  return (
    <div className="w-40 h-full mr-20 flex">
      <Link to={gameLink||imageSrc} key={gameId}>
        <div className="m-2 w-full min-w-[175px] max-w-[200px] shrink-0 flex flex-col rounded-2xl p-1 shadow-gray-400 shadow-md hover:scale-y-110">
          <div className="border h-24 rounded-2xl">
            <img
              src={imageSrc}
              alt="thumbnail"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="w-full mt-1">
            <h3 className="font-serif overflow-hidden text-ellipsis text-[14px]">
              <strong>{gameName}</strong>
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DisplayContainer;
