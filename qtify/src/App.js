import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero'
import { useState } from "react";

function App() {
  const [data,setData] = useState([]);

  const generateTopAlbums = () => {

  };

  return (
    <div >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
