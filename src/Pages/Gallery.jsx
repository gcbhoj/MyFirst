import React from "react";
import DummyHero from "../components/HeroComponent/DummyHero.jsx";

const Gallery = () => {
  return (
    <>
      <DummyHero statement="Explore our vibrant collection of memories and moments" />
      <div className="flex-grow border-2 p-1 flex flex-wrap"></div>
    </>
  );
};

export default Gallery;
