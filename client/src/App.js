import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import homeBanner from "./assets/HomeBanner.json";
import Image from "./components/Image/Image"
import homeGallery from "./assets/homeGallery.json";
import Wrapper from "./components/Wrapper/index";






function App() {
  const Home = homeBanner.map(info => {
    return <Banner key={info.id} h1={info.h1} message={info.message} image={require("./assets/images/" + info.image)} name={info.name} />
  })
  
  const Gallery = homeGallery.map(image => {
    return  <Image key={image.id} name={image.name} gallery={require("./assets/images/" + image.gallery)} />
  })
  return (
    <div className="App">
      <Navbar />
      {Home}
      <Wrapper>
      {Gallery}

      </Wrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;

