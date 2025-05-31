import React from "react";
import Auth from "./Pages/SignUpPage.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

const App = () => {
  return (
    <div className="border 1 bg-[#E3E4DB]">
      <Hero/>
      <Navbar />
      {/* <Auth /> */}
    </div>
  );
};

export default App;
