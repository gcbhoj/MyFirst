import React from "react";
import Hero from "../components/Hero.jsx";
import UpcomingEvents from "../components/UpcomingEvents.jsx";
import HomePageContent from "../components/HomePageContent.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-4 grid-rows-4 gap-2 p-4 border border-purple-800">
        <div className="col-span-3 row-span-4 bg-gray-100 p-4 rounded shadow">
          <HomePageContent />
        </div>
        <div className="row-span-4 flex flex-wrap flex-col">
          <UpcomingEvents />
        </div>
      </div>
    </>
  );
};

export default HomePage;
