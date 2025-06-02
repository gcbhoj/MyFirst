import React from "react";
import Hero from "../components/HeroComponent/Hero.jsx";
import Button from "../components/UIComponents/Button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <div className="m-1 mt-0 h-14 flex flex-wrap p-0.5 items-center justify-evenly">
        <Link to={"/gamesPanel"}>
          <Button
            width="w-36"
            height="h-12"
            label="games panel"
            background="bg-zinc-400"
            border="border-0"
          />
        </Link>
        <Link to={"/addImages"}>
          <Button
            width="w-36"
            height="h-12"
            label="gallery panel"
            background="bg-zinc-400"
            border="border-0"
          />
        </Link>
        <Link to={"/addEvents"}>
          <Button
            width="w-36"
            height="h-12"
            label="events panel"
            background="bg-zinc-400"
            border="border-0"
          />
        </Link>
        <Link to={"/viewFeedback"}></Link>
        <Button
          width="w-36"
          height="h-12"
          label="view feedback"
          background="bg-zinc-400"
          border="border-0"
        />
      </div>
    </>
  );
};

export default Dashboard;
