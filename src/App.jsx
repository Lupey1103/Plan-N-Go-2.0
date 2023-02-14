import { useState } from "react";
import { Controlbar } from "./components/Controlbar";
import { FeaturedCatagories } from "./components/FeaturedCatagories";
import { Jumbotron } from "./components/Jumbotron";
import { Navbar } from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* //Navbar */}
      
        <Navbar />
      

      {/* //Header IMG */}
      <Jumbotron />
      {/* //Searchbar */}
      <Controlbar />
      {/* //Featured Catagories */}
      <FeaturedCatagories />
      {/* //Generic Nearby Events */}
      </div>
  );
    
      
}

export default App;
