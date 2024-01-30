import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero'
import { useState, useEffect } from "react";
import { fetchTopAlbums } from "./api/api";

function App() {
  const [topAlbumsData,setTopAlbumsData] = useState([]);

  const generateTopAlbums = async () => {
    try{
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    }
    catch(err){
      console.error(err);
    }
  };

  useEffect(() => {
    generateTopAlbums();
  },[]);

  return (
    <div >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
