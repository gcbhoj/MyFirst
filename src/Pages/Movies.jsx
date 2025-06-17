import React from "react";
import Button from "../components/UIComponents/Button";
import { Link } from "react-router-dom";

const Movies = () => {
    return (
      <div>
        <Link to={"/viewMovies"}>
          <Button
            width="w-36"
            height="h-12"
            label="view movies"
            background="bg-zinc-400"
            border="border-0"
          />
        </Link>
        <Link to={"/addMovies"}>
          <Button
            width="w-36"
            height="h-12"
            label="add movies"
            background="bg-zinc-400"
            border="border-0"
          />
        </Link>
      </div>
    );
};

export default Movies;
