import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero'
import { useState, useEffect } from "react";
import { fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";
import styles from './App.module.css';

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
      {/* {
        topAlbumsData.map((topAlbum) => (
          <Card data={topAlbum} type="album" key={topAlbum.id}/>
        ))
      } */}
      <div className={styles.sectionWrapper}> 
      <Section data={topAlbumsData} title="Top Albums" type="album"/>
      </div>
    </div>
  );
}

export default App;
