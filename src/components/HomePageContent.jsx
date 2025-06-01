import React from "react";
import HomePageFAQ1 from "./HomePageFAQ1.jsx";
import HomePageFAQ2 from "./HomePageFAQ2.jsx";
import HomePageFinalContent from "./HomePageFinalContent.jsx";

const HomePageContent = () => {
  return (
    <>
      <p className="border font-serif tracking-[0.025rem] text-justify first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase m-1 p-4 ">
        Welcome to Samskrita Bharati Canada's Game Portal — your gateway to
        mastering Sanskrit in an exciting and immersive way! Whether you're just
        starting your Sanskrit journey or looking to deepen your fluency, our
        interactive games are designed to make learning fun, effective, and
        culturally enriching.
        <br />
        Join thousands of learners who are making Sanskrit part of their daily
        lives-not through textbooks, but through jouful discovery.
      </p>
      <div>
        <HomePageFAQ1 />
      </div>
      <div>
        <HomePageFAQ2 />
      </div>
      <div>
        <HomePageFinalContent />
      </div>
      <div>
        <strong className="flex flex-wrap font-serif items-center align-middle justify-center italic text-[12px]">
          To Play games no sign in required. Please sign up to access
          leaderboard
        </strong>
      </div>
    </>
  );
};

export default HomePageContent;
