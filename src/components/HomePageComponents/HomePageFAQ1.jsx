import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Button from "../UIComponents/Button.jsx";

const HomePageFAQ1 = () => {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList((prev) => !prev);
  };

  return (
    <>
      <Button
        onClick={toggleList}
        icon={showList ? <FaMinus /> : <FaPlus />}
        border="border-0"
        margin="m-5"
        label="What We Offer:"
        hoverBackground="hover:text-rose-400"
      />

      {showList && (
        <ul className="list-disc pl-8 pr-4 font-serif text-sm text-gray-800 space-y-3 tracking-wide">
          <li>
            <strong>Engaging Games for All Levels:</strong> From basic alphabet
            games to advanced grammar challenges, we offer a diverse range of
            games tailored for learners at every stage.
          </li>
          <li>
            <strong>Skill-Based Progression:</strong> Each game helps develop
            specific skills — like vocabulary, sentence structure,
            comprehension, and listening — allowing you to track your growth.
          </li>
          <li>
            <strong>Cultural Connection:</strong> Sanskrit is more than a
            language — it’s a bridge to India’s rich heritage. Our content
            brings that heritage alive through storytelling and play.
          </li>
        </ul>
      )}
    </>
  );
};

export default HomePageFAQ1;
