import React from "react";
import Auth from "./Pages/SignUpPage.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div className="border 1 bg-[#E3E4DB]">
      <Navbar />
      <Auth />
    </div>
  );
};

export default App;
