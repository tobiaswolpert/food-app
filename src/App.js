import React, { useState } from "react";
import Hero from "./components/02_Hero/Hero.component";
import Navbar from "./components/01_Navigation/Navbar.component";

const App = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <div className="App">
      <Navbar isVisible={isVisible} />
      <Hero setVisible={setVisible} isVisible={isVisible} />
    </div>
  );
};

export default App;
