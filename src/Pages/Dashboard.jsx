import React from "react";
import Hero from "../components/Hero";
import Button from "../components/UIComponents/Button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Hero />
      <div className="border m-1 mt-0 h-14 flex flex-wrap p-0.5 items-center justify-evenly">
        <Link to={"/addGames"}>
          <Button
            width="w-36"
            height="h-12"
            label="Add Games"
            background="bg-zinc-400"
            border="border-0"
          />
        </Link>
        <Link to={"/addImages"}>
          <Button
            width="w-36"
            height="h-12"
            label="add to gallery"
            background="bg-zinc-400"
            border="border-0"
          />
        </Link>
        <Link to={"/addEvents"}>
          <Button
            width="w-36"
            height="h-12"
            label="add to events"
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
