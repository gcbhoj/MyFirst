import React from "react";
import CategoryContainer from "../Layout/CategoryContainer";
import images from "../imagegallery.json";
import DummyHero from "../components/DummyHero";

const Gallery = () => {
  return (
    <>
      <DummyHero statement="Explore our vibrant collection of memories and moments" />
      <div className="flex-grow border-2 p-1 flex flex-wrap">
        {images.map((category) => (
          <CategoryContainer
            key={category.category}
            categoryName={category.category}
            categoryId={category.categoryId}
            games={category.images}
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
