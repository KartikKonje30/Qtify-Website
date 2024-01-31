import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero'
import { useState, useEffect } from "react";
import { fetchTopAlbums, fetchSongs } from "./api/api";
import Section from "./components/Section/Section";
import styles from './App.module.css';

function App() {
  const [data, setData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [toggle, setToggle] = useState(false);
  // const [topAlbumsData,setTopAlbumsData] = useState([]);
  const [songsData,setSongsData] = useState([]);
  const [value, setValue] = useState(0);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }
    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() =>{
    console.log(value);
    generateSongsData(value);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[value]);

const generateData = async () => {
  try{
    const res = await fetchTopAlbums();
    setData(res);
  }
  catch(err){
    console.error(err);
  }
}

  // const generateTopAlbums = async () => {
  //   try{
  //     const data = await fetchTopAlbums();
  //     setTopAlbumsData(data);
  //   }
  //   catch(err){
  //     console.error(err);
  //   }
  // };

  const generateAllSongData = async () => {
    try{
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredDataValues(res);
    }
    catch(err){
      console.error(err);
    }
  };

  const filteredData = (val) => {
    console.log(val);
    setFilteredDataValues(val);
  }

  useEffect(() => {
    generateData();
    generateAllSongData();
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
      <Section 
      data={data} 
      title="Top Albums" 
      type="album" 
      filteredDataValues={data}
      />
      <Section 
      data={data} 
      title="New Albums" 
      type="album"
      filteredDataValues={data}
      />
      <Section 
      data={songsData} 
      title="Songs" 
      type="song" 
      filteredData={filteredData}
      filteredDataValues={filteredDataValues}
      value={value}
      handleToggle={handleToggle}
      handleChange={handleChange}
      />
      </div>
    </div>
  );
}

export default App;
