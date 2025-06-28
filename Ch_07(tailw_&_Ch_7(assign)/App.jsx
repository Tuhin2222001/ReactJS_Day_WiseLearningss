import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Cart1 from "./Components/Cart1.jsx";
import Cart2 from "./Components/Cart2.jsx";
function App() {
  return (
    <div>
      <Navbar />

      <Cart1
        username="Charlotte"
        email="Charle98@myOrg.com"
        role="Product Engineer"
      />

      <Cart2 username="Stefne" email="Stef45@myOrg.com" role="AI Engineer" />
    </div>
  );
}

export default App;
