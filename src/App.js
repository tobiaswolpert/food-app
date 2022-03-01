import React from "react";
import Hero from "./components/02_Hero/Hero.component";
import Navbar from "./components/01_Navigation/Navbar.component";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
